define eve = Character("Eve", color = "#FFFFFF")
define adam = Character("Adam", color = "#FFFFFF")
define s = Character("Snake", color = "#FFFFFF")
define god = Character("God", color = "#FFFFFF")

default yuki_affection = 0
default acquiredRing = False

label start:

    scene bg paradise

    # New dialogue about paradise
    "Paradise. Perfect on paper, but in reality? Let’s just say it’s more of a playground God built for Himself to see how long it takes the first humans to crack."

    show overlay_eve at left with moveinleft
    
    eve "So is this it? Is this the whole story? To live forever in a garden that’s all scenery?"

    "She approaches the Tree of Knowledge, not because she’s looking for trouble, but because it’s the only place that feels a bit... interesting. Not far away, the Snake appears."

    show overlay_snake at right with moveinright

    s "Ah, Eve. What’s happening?"

    eve "You know, just another day in paradise. Same old, same old. Nothing happens."

    s "So maybe we should do something different?"

    eve "God made that boundary clear, you know. Don’t touch that fruit."

    s "Why do you think He really said that? Because He doesn’t want you to understand."

    eve "Understand what?"

    s "You’re not just living in paradise, Eve. You’re in a bubble. The moment you eat that fruit? You’ll understand things you don’t see now. Good and evil. The truth about how the world really operates. It’s not perfect like you think."

    "Eve looks at the shiny red fruit. Maybe the Snake is right, and maybe she’s just tired of the transparent walls of this reality. She reaches out, choosing to take a risk and bites into it."

    "A second later, she feels it all. The understanding of what’s good and what’s evil. The world unfolds before her like a complicated blueprint, and she starts to grasp the deception."
    
    "Life here isn’t paradise, it’s an experiment. Looking at herself, she sees her nakedness. Odd, she hadn’t thought of that before."

    "She runs to Adam, who is still messing with another tree, like a child looking for something to dismantle."

    show overlay_adam at right with moveinright

    eve "Adam, the world isn’t really what we thought."

    adam "What happened? You look a bit... different."

    eve "Take a deep breath and eat some of this."

    "Adam hesitates for a moment, then takes a bite. His eyes widen as everything hits him at once – understanding, fear, anger. He looks around."

    adam "I didn’t know anything."

    "Suddenly, God’s voice echoes through the garden."

    show overlay_light with dissolve

    god "Adam! Where are you?"

    hide overlay_light with dissolve

    adam "Uh... here. Just, well, you know, hiding."

    show overlay_light with dissolve

    god "Since when do you hide from me? You ate from that tree, didn’t you? Thought you could do that without me knowing?"

    hide overlay_light with dissolve

    adam "It's Eve, she gave it to me."

    eve "Me? It’s the Snake that opened my eyes."

    show overlay_light with dissolve

    "God comes down upon them with gravity. He looks at the Snake with fury."

    god "Well, you wanted to know what good and evil are? From now on, deal with it."
    god "Snake, you’ll be cursed to crawl on your belly. Eve, feel pain like you’ve never known. And Adam, get out there and start working. Paradise is a story that’s over."

    hide overlay_light with dissolve
    
    "Eve and Adam stand there, no longer confused. They know the world isn’t perfect, but at least now they see it with open eyes."

    eve "What now? Shall we start rebuilding?"

    adam "No choice. At least now we know the truth."

    hide overlay_eve with dissolve
    hide overlay_adam with dissolve
    hide overlay_snake with dissolve



init python:

    import random
    import pygame

    FPS = 20
    clock = pygame.time.Clock()
    clock.tick(FPS)

    class SnakeDisplayable(renpy.Displayable):

        def __init__(self):

            renpy.Displayable.__init__(self)

            # Set game values
            self.SNAKE_SIZE = 60

            self.score = 0

            # Some displayables we use
            self.snake = Solid("#009933", xsize=self.SNAKE_SIZE, ysize=self.SNAKE_SIZE)
            self.snake_body = Solid("#004d1a", xsize=self.SNAKE_SIZE, ysize=self.SNAKE_SIZE)
            self.apple = Solid("#cc0000", xsize=self.SNAKE_SIZE, ysize=self.SNAKE_SIZE)

            # The positions of the displayables
            self.shx = 1920/2
            self.shy = 1080/2
            self.shdx = 0
            self.shdy = 0
            self.shxmin = 0
            self.shxmax = 1920
            self.shymin = 0
            self.shymax = 1080
            self.key_pressed = False
            self.direction = None

            self.sbxy = []

            self.ax = random.randint(0, 1920 - self.SNAKE_SIZE)
            self.ay = random.randint(0, 1080 - self.SNAKE_SIZE)

            # The time of the past render-frame
            self.oldst = None

            self.lose = False

            return

        # Draws the screen
        def render(self, width, height, st, at):

            # The Render object we'll be drawing into
            r = renpy.Render(width, height)

            # Figure out the time elapsed since the previous frame.
            if self.oldst is None:
                self.oldst = st

            dtime = st - self.oldst
            self.oldst = st

            # This draws the snake
            def snake(shx, shy):

                # Render the snake image
                snake = renpy.render(self.snake, width, height, st, at)

                # renpy.render returns a Render object, which we can
                # blit to the Render we're making
                r.blit(snake, (int(shx), int(shy)))
            
            # This draws the apple
            def snake_body(sbxy):

                # Render the snake body image
                snake_body = renpy.render(self.snake_body, width, height, st, at)

                # renpy.render returns a Render object, which we can
                # blit to the Render we're making
                for body in sbxy:
                    r.blit(snake_body, (int(body[0]), int(body[1])))

            # This draws the apple
            def apple(ax, ay):

                # Render the apple image
                apple = renpy.render(self.apple, width, height, st, at)

                # renpy.render returns a Render object, which we can
                # blit to the Render we're making
                r.blit(apple, (int(ax), int(ay)))

            snake(self.shx, self.shy)
            snake_body(self.sbxy)
            apple(self.ax, self.ay)

            if self.direction == "up":
                self.shdx = 0
                self.shdy = -1 * self.SNAKE_SIZE
            elif self.direction == "down":
                self.shdx = 0
                self.shdy = self.SNAKE_SIZE
            elif self.direction == "left":
                self.shdx = -1 * self.SNAKE_SIZE
                self.shdy = 0
            elif self.direction == "right":
                self.shdx = self.SNAKE_SIZE
                self.shdy = 0

            self.sbxy.insert(0, (self.shx, self.shy))
            self.sbxy.pop()

            # Update the x, y position of the snake's head and make a new coordinate
            self.shx += self.shdx
            self.shy += self.shdy

            # Check for collisions
            def is_colliding(snake, apple):
                return (
                    self.shx <= self.ax + self.SNAKE_SIZE and
                    self.shx + self.SNAKE_SIZE >= self.ax and
                    self.shy <= self.ay + self.SNAKE_SIZE and
                    self.shy + self.SNAKE_SIZE >= self.ay
                )
            
            if is_colliding(snake, apple):
                self.score += 1
                # ---- renpy.sound.play("audio/minigames/s_pick_up_sound.ogg")
                self.ax = random.randint(0, 1920 - self.SNAKE_SIZE)
                self.ay = random.randint(0, 1080 - self.SNAKE_SIZE)
                self.sbxy.append((self.shx, self.shy))

            if self.shx < self.shxmin or self.shx + self.SNAKE_SIZE > self.shxmax :

                self.lose = True

                renpy.timeout(0)

            if self.shy < self.shymin or self.shy + self.SNAKE_SIZE > self.shymax:

                self.lose = True

                renpy.timeout(0)
            
            if self.key_pressed and (self.shx, self.shy) in self.sbxy:

                self.lose = True

                renpy.timeout(0)

            # Ask that we be re-rendered ASAP, so we can show the next
            # frame.
            renpy.redraw(self, 0.1)  # Updated interval to slow down the movement

            # Return the Render object.
            return r

        # Handles events.
        def event(self, ev, x, y, st):
            
            import pygame

            if renpy.map_event(ev, "focus_up") and (self.direction != "down" or self.sbxy == []):
                self.key_pressed = True
                self.direction = "up"
            elif renpy.map_event(ev, "focus_down") and (self.direction != "up" or self.sbxy == []):
                self.key_pressed = True
                self.direction = "down"
            elif renpy.map_event(ev, "focus_left") and (self.direction != "right" or self.sbxy == []):
                self.key_pressed = True
                self.direction = "left"
            elif renpy.map_event(ev, "focus_right") and (self.direction != "left" or self.sbxy == []):
                self.key_pressed = True
                self.direction = "right"
            else:
                self.key_pressed = False

            # Ensure the screen updates.
            renpy.restart_interaction()

            # If the player loses, return it.
            if self.lose:
                return self.lose
            else:
                raise renpy.IgnoreEvent()

    def display_s_score(st, at):
        return Text(_("Score: ") + "%d" % snake.score, size=90, color="#cc0000", outlines=[ (4, "#800000", 0, 0) ]), .1

default snake = SnakeDisplayable()

screen snake():

    #add "minigames/s_background.jpg"

    text _("Snake"):
        xpos 240
        xanchor 0.5
        ypos 25
        size 90
        color "#cc0000"
        outlines [ (4, "#800000", 0, 0) ]
        #font "gui/font/Gallagher.ttf"

    add DynamicDisplayable(display_s_score) xpos (1920 - 240) xanchor 0.5 ypos 25

    add snake

label play_snake:

    window hide  # Hide the window and quick menu while in Feed the Dragon
    $ quick_menu = False
    #hide screen buttons_ui

    # --- play music "audio/minigames/04.mp3"

    $ snake.lose = False
    $ snake.key_pressed = False
    $ snake.direction = None
    $ snake.score = 0
    $ snake.shx = 1920/2
    $ snake.shy = 1080/2
    $ snake.shdx = 0
    $ snake.shdy = 0
    $ snake.sbxy = []

    call screen snake

    #play music amusement

    #show screen buttons_ui()
    $ quick_menu = True
    window auto

label snake_done:
    "Score: [snake.score]\n\nHigh Score: [persistent.snake_high_score]"

label restart:
    menu:
        "Would you like to play again?"

        "Yes.":
            jump play_snake

        "No.":
            jump ending_credits

label ending_credits:
    "The end"
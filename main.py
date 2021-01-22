while True:
    light.set_brightness(50)
    print ("light " + input.light_level() + " sound " + input.sound_level() )

    if input.light_level() > 6 and input.sound_level() > 138:
        light.set_all(color.rgb(255, 255, 255))
        pause(60000)

    else:
        light.clear()
                   
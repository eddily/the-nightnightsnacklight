while (true) {
    light.setBrightness(50)
    console.log("light " + input.lightLevel() + " sound " + input.soundLevel())
    if (input.lightLevel() > 6 && input.soundLevel() > 138) {
        light.setAll(color.rgb(255, 255, 255))
        pause(60000)
    } else {
        light.clear()
    }
    
}

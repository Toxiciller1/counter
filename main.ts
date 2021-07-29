let Start_of_counter = 7
basic.forever(function () {
    serial.writeValue("Count", Start_of_counter)
    Start_of_counter += 1
    basic.pause(100)
    if (Start_of_counter == 85) {
        serial.writeValue("Count", 85)
        while (Start_of_counter != 7) {
            Start_of_counter += -1
            serial.writeValue("Count", Start_of_counter)
            basic.pause(100)
        }
    }
})

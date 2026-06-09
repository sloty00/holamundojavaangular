
package com.holamundo.holamundo; // Asegúrate que coincida con tu carpeta

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200") // Permite que Angular se conecte
public class HolaController {

    @GetMapping("/api/saludo")
    public String hola() {
        return "Hola desde el Backend de Java!";
    }
}
package com.resizer.backend;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@CrossOrigin(origins = "http://localhost:3000")

public class ImageController {

    @PostMapping("/api/resize")
    public String handleUpload(@RequestParam("file") MultipartFile file){

        String name = file.getOriginalFilename();
        long size = file.getSize();

        return "I recieved "+name+" which is "+size+" bytes!";

    }
    
}

package com.resizer.backend;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import net.coobird.thumbnailator.Thumbnails;
import java.io.ByteArrayOutputStream;

@RestController
@CrossOrigin(origins = "http://localhost:3000")

public class ImageController {

    @PostMapping("/api/resize")
    public byte[] handleUpload(@RequestParam("file") MultipartFile file) throws Exception{

        ByteArrayOutputStream outputStream = new ByteArrayOutputStream();

        Thumbnails.of(file.getInputStream()).forceSize(500,500).outputFormat("png").toOutputStream(outputStream);
        Thumbnails.of(file.getInputStream()).forceSize(1000,1000).outputFormat("png").toOutputStream(outputStream);
        Thumbnails.of(file.getInputStream()).forceSize(2000,2000).outputFormat("png").toOutputStream(outputStream);

        return outputStream.toByteArray();

    }
    
}

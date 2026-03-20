package com.resizer.backend;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import net.coobird.thumbnailator.Thumbnails;
import java.io.ByteArrayOutputStream;
import java.util.zip.ZipEntry;
import java.util.zip.ZipOutputStream;

@RestController
@CrossOrigin(origins = "http://localhost:3000")

public class ImageController {

    @PostMapping("/api/resize")
    public byte[] handleUpload(@RequestParam("file") MultipartFile file) throws Exception{

        ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
        ZipOutputStream zip = new ZipOutputStream(outputStream);

        int[] sizes = {500,1000,2000};

        for (int size: sizes){
            ZipEntry entry = new ZipEntry("rezied_"+size+".png");
            zip.putNextEntry(entry);
            Thumbnails.of(file.getInputStream()).forceSize(size,size).outputFormat("png").toOutputStream(zip);
            zip.closeEntry();
        }
        zip.close();
        
        return outputStream.toByteArray();

    }
    
}

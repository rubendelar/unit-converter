package com.unitConverter.unitConverter.Controllers;

import com.unitConverter.unitConverter.Model.Converter;
import com.unitConverter.unitConverter.Services.ConverterServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin
public class ConverterController {
    @Autowired
    ConverterServices converterService;

    @PostMapping("/add")
    @ResponseStatus(HttpStatus.CREATED)
    public Converter saveConversion(@RequestParam String result) {
        return converterService.saveConversion(result);

    }

    @DeleteMapping("/remove")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public void deleteSavedConversion(@RequestParam Integer id) {
        converterService.deleteSavedConversion(id);
    }
}

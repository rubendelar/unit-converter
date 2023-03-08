package com.unitConverter.unitConverter.Services;

import com.unitConverter.unitConverter.Model.Converter;
import com.unitConverter.unitConverter.Repositories.ConverterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

@Service
public class ConverterServiceImpl implements ConverterServices {

    @Autowired
    ConverterRepository converterRepository;

    @Override
    public Converter saveConversion(String result) {

        Converter converter = new Converter(result);
        return converterRepository.save(converter);
    }

    @Override
    public void deleteSavedConversion(Integer id) {
        if (converterRepository.findById(id).isPresent()) {
            converterRepository.deleteById(id);
        } else throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Can not find this Saved Conversion");
    }
}

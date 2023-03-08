package com.unitConverter.unitConverter.Services;

import com.unitConverter.unitConverter.Model.Converter;

public interface ConverterServices {
public Converter saveConversion(String result);

public void deleteSavedConversion(Integer id);

}

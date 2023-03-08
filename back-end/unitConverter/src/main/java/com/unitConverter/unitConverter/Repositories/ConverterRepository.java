package com.unitConverter.unitConverter.Repositories;

import com.unitConverter.unitConverter.Model.Converter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ConverterRepository extends JpaRepository<Converter,Integer> {
}

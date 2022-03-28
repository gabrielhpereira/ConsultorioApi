package com.gabriel.consultorio_spring.consulta.repository;

import com.gabriel.consultorio_spring.consulta.model.Consulta;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ConsultaRepository extends JpaRepository<Consulta, Long> {
}

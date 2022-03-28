package com.gabriel.consultorio_spring.medico.repository;

import com.gabriel.consultorio_spring.medico.model.Medico;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MedicoRepository extends JpaRepository<Medico,Long> {
}

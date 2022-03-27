package com.gabriel.consultorio_spring.model;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Entity
@Data
public class Consulta {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(length = 200,nullable = false)
    private String nomeMedico;

    @Column(length = 200,nullable = false)
    private String crmMedico;

    @Column(length = 200,nullable = false)
    private String nomePaciente;

    @Column(length = 200,nullable = false)
    private String especialidadeMedica;

    @Column(length = 200,nullable = false)
    private Date dataConsulta;

    @Column(length = 200,nullable = false)
    private Integer numeroConsultorio;
}

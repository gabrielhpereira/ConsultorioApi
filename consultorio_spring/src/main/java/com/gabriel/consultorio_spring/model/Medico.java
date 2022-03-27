package com.gabriel.consultorio_spring.model;

import lombok.Data;
import javax.persistence.*;

@Entity
@Data
public class Medico {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(length = 200,nullable = false,unique = true)
    private String crm;

    @Column(length = 200,nullable = false)
    private String nome;

    @Column(length = 100,nullable = false)
    private Integer idade;
}

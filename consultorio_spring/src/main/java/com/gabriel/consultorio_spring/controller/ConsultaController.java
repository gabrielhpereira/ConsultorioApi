package com.gabriel.consultorio_spring.controller;

import com.gabriel.consultorio_spring.model.Consulta;
import com.gabriel.consultorio_spring.repository.ConsultaRepository;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/consultas")
@AllArgsConstructor
public class ConsultaController {

    private final ConsultaRepository consultaRepository;

    @GetMapping("/")
    public List<Consulta>all(){
        return consultaRepository.findAll();
    }

    @GetMapping("/{id}")
    public Consulta findById(@PathVariable("id")Long id){
        return consultaRepository.findById(id)
                .orElseThrow();
    }

    @PostMapping("/")
    public Consulta saveConsulta(@RequestBody Consulta saveConsulta){
        return consultaRepository.save(saveConsulta);
    }

    @PutMapping("/{id}")
    public Consulta updateConsulta(@PathVariable("id")Long id, @RequestBody Consulta updateConsulta){
        return consultaRepository.findById(id)
                .map((consulta -> {
                    consulta.setNomeMedico(updateConsulta.getNomeMedico());
                    consulta.setNomePaciente(updateConsulta.getNomePaciente());
                    consulta.setCrmMedico(updateConsulta.getCrmMedico());
                    consulta.setDataConsulta(updateConsulta.getDataConsulta());
                    consulta.setEspecialidadeMedica(updateConsulta.getEspecialidadeMedica());
                    consulta.setNumeroConsultorio(updateConsulta.getNumeroConsultorio());
                    return consultaRepository.save(consulta);
                }))
                .orElseGet(()->{
                    return consultaRepository.save(updateConsulta);
                });
    }

    @DeleteMapping("/{id}")
    public void deleteConsulta(@PathVariable("id")Long id){
        consultaRepository.deleteById(id);
    }
}
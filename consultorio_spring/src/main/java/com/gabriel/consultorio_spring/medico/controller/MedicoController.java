package com.gabriel.consultorio_spring.medico.controller;

import com.gabriel.consultorio_spring.medico.model.Medico;
import com.gabriel.consultorio_spring.medico.repository.MedicoRepository;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/medicos")
@AllArgsConstructor
public class MedicoController {
    private final MedicoRepository medicoRepository;

    @GetMapping("/")
    public List<Medico>all(){
        return medicoRepository.findAll();
    }

    @GetMapping("/{id}")
    public Medico findById(@PathVariable("id")Long id){
        return medicoRepository.findById(id)
                .orElseThrow();
    }

    @PostMapping("/")
    public Medico saveMedico(@RequestBody Medico saveMedico){
        return medicoRepository.save(saveMedico);
    }

    @PutMapping("/{id}")
    public Medico updateMedico(@PathVariable("id")Long id, @RequestBody Medico updateMedico){
        return medicoRepository.findById(id)
                .map((medico -> {
                    medico.setCrm(updateMedico.getCrm());
                    medico.setNome(updateMedico.getNome());
                    medico.setIdade(updateMedico.getIdade());
                    return medicoRepository.save(medico);
                }))
                .orElseGet(()->{
                    return medicoRepository.save(updateMedico);
                });
    }

    @DeleteMapping("/{id}")
    public void deleteMedico(@PathVariable("id")Long id){
        medicoRepository.deleteById(id);
    }
}

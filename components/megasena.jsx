'use client';
import React, { useState } from 'react'

export default function sortearNumeros(min, max, quantidade) {
   if (quantidade > 60 || quantidade < 6){
      throw new Error("Quantidade inválida")
   }else{
      const numerosSorteados = [];
      while (numerosSorteados.length < quantidade) {
        const numeroSorteado = Math.floor(Math.random() * (max - min + 1)) + min;
        if (!numerosSorteados.includes(numeroSorteado)) {
          numerosSorteados.push(numeroSorteado);
        }
      }
      numerosSorteados.sort((a, b) => a - b)
      return numerosSorteados;
   }    
  }
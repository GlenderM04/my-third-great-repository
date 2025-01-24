"use client";
// components/NameCard.js
import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: black;
  margin: 0;
  flex-wrap: wrap;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 350px;
  height: 300px;
  border-radius: 15px;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  color: white;
  font-family: Arial, sans-serif;
  text-align: center;
  overflow: hidden;
  position: relative;
  margin: 20px;
`;

const Gradient = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, #ff9a9e, #fad0c4, #fbc2eb, #a18cd1);
  background-size: 400% 400%;
  animation: gradientAnimation 10s ease infinite;
  z-index: -1;
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
  border: 3px solid white;
`;

const Name = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin: 0;
`;

const Subtitle = styled.p`
  font-size: 16px;
  margin-top: 5px;
  opacity: 0.9;
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  margin-top: 10px;
`;

const NamesList = () => {
  const [names, setNames] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNames = async () => {
      try {
        const context = require.context('../../public/names', true, /name.json$/); // Cargar todos los name.json
        const allNames = context.keys().map((filename) => {
          try {
            const nameData = context(filename);
            if (!nameData.name || typeof nameData.name !== 'string') {
              throw new Error(`El archivo ${filename} no contiene un nombre válido.`);
            }
            return nameData.name;
          } catch (err) {
            console.error(err);
            return null; // En caso de error, se retorna null para manejarlo más tarde
          }
        }).filter(Boolean); // Filtrar nulls de nombres no válidos
        setNames(allNames);
        setError(null); // Resetear el error si todo está bien
      } catch (err) {
        setError('Hubo un problema al cargar los archivos. Por favor revisa los archivos JSON.');
        console.error(err);
      }
    };

    fetchNames();
  }, []);

  return (
    <Container>
      {error && <ErrorMessage>{error}</ErrorMessage>} {/* Mostrar error si hay */}
      {names.length > 0 ? (
        names.map((name, index) => (
          <Card key={index}>
            <Gradient />
            <Image src={`https://picsum.photos/200/300?random=${index}`} alt="Random" />
            <Name>{name}</Name>
            <Subtitle>Bienvenid@ a mi portafolio</Subtitle>
          </Card>
        ))
      ) : (
        <ErrorMessage>No se encontraron nombres válidos para mostrar.</ErrorMessage>
      )}
    </Container>
  );
};

export default NamesList;

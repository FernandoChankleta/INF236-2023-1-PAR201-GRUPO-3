
import React from 'react';
import { Document, Page, Text, View, StyleSheet, PDFViewer } from '@react-pdf/renderer';

// Estilos para el PDF
const styles = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    fontSize: 12,
    padding: 20,
  },
  left_section: {
    marginBottom: 10,
  },
  rightUp_section: {
    position: 'absolute',
    height: 100,
    top: '9%',
    left: "55%",
    //backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  rightDown_section: {
    position: 'absolute',
    height: 100,
    left: "50%",
    //backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    alignSelf: "center",
    textDecoration: 'underline', //subrayado
    fontFamily: 'Helvetica-Bold',
    marginBottom: 10,
  },
  title_section: {
    fontFamily: 'Helvetica-Bold',
    marginBottom: 10,
  },
});

// Componente del PDF
const DocuPDF = ({ pacients }) => {
  return (
      <Document>
        <Page style={styles.page}>
          <View style={styles.left_section}>
            <Text>{"MINISTERIO DE SALUD\nS.S Metropolitano Occidente\nSAPU Violeta Parra"}</Text>
          </View>
          <View style={styles.title}>
            <Text>DATO ATENCIÓN URGENCIA</Text>
          </View>
          <View style={styles.title_section}>
            <Text>DATOS DEL PACIENTE</Text>
          </View>
          <View style={styles.left_section}>
            <Text>Nombre: {pacients.nombre}</Text>
          </View>
          <View style={styles.left_section}>
            <Text>R.U.T: {pacients.rut}</Text>
          </View>
          <View style={styles.left_section}>
            <Text>Dirección: {pacients.direccion}</Text>
          </View>
          <View style={styles.left_section}>
            <Text>Fecha nacimiento: {pacients.fecha_nacimiento}</Text>
          </View>
          <View style={styles.left_section}>
            <Text>Comuna: {pacients.comuna}</Text>
          </View>
          <View style={styles.left_section}>
            <Text>Previsión: {pacients.prevision}</Text>
          </View>
          <View style={styles.left_section}>
            <Text>Convenio: {pacients.convenio}</Text>
          </View>
          <View style={styles.title_section}>
            <Text>DATOS DE INGRESO DEL PACIENTE</Text>
          </View>
          <View style={styles.left_section}>
            <Text>Reemitido por: Enfermera Natalia Carrasco</Text>
          </View>
          <View style={styles.title_section}>
            <Text>MOTIVO CONSULTA</Text>
          </View>
          <View style={styles.left_section}>
            <Text>fiebre y vomito</Text>
          </View>
          <View style={styles.title_section}>
            <Text>Registro de Signos Vitales:</Text>
          </View>
          <View style={styles.left_section}>
            <Text>pulso, temperatura , presion: </Text>
          </View>
          <View style={[styles.rightDown_section, {top: "29%", fontFamily: 'Helvetica-Bold'}]}>
            <Text>Categorizaciones: c2</Text>
          </View>
          <View style={styles.title_section}>
            <Text>FECHA/HORA ATENCIÓN</Text>
          </View>
          <View style={styles.left_section}>
            <Text>10:50 del 25/06/2023 </Text>
          </View>
          <View style={styles.title_section}>
            <Text>DATOS DE LA ATENCIÓN MÉDICA</Text>
          </View>
          <View style={styles.title_section}>
            <Text>Anamnesis</Text>
          </View>
          <View style={styles.title_section}>
            <Text>Funcionario: Doctor Luis Cordova</Text>
          </View>
          <View style={styles.title_section}>
            <Text>Exploración Física:</Text>
          </View>
          <View style={styles.title_section}>
            <Text>Medicamentos</Text>
          </View>
          <View style={styles.left_section}>
            <Text>  ibuprofeno cada 8 horas </Text>
          </View>
          <View style={styles.title_section}>
            <Text>Diagnóstico: fiebre leve</Text>
          </View>
          
          
          
        </Page>
      </Document>
  );
};

export default DocuPDF;
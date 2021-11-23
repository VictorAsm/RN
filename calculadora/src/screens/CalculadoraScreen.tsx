import React from 'react'
import { Text, View } from 'react-native'
import { BotonCalc } from '../components/BotonCalc'
import { useCalculadora } from '../hooks/useCalculadora'
import { styles } from '../theme/appTheme'

export const CalculadoraScreen = () => {

    const {
        numeroAnterior,
        numero,
        limpiar,
        positivoNegativo,
        btnDelete,
        btnDividir,
        armarNumero,
        btnMultiplicar,
        btnRestar,
        btnSumar,
        calcular,
    } = useCalculadora();

    return (
        <View style={styles.calculadoraContainer}>
            <Text style={ styles.resultadoPequenio }>{numeroAnterior}</Text>
            <Text style={ styles.resultado }>{numero}</Text>

            {/* FILA DE BOTONES */}
            <View style={styles.fila}>
                <BotonCalc texto="C" color="#9B9B9B"    accion={limpiar}/>
                <BotonCalc texto="+/-" color="#9B9B9B"  accion={positivoNegativo}/>
                <BotonCalc texto="del" color="#9B9B9B"  accion={btnDelete}/>
                <BotonCalc texto="/" color="#FF9427"    accion={btnDividir}/>
            </View>

            {/* FILA DE BOTONES */}
            <View style={styles.fila}>
                <BotonCalc texto="7" color="#2D2D2D" accion={armarNumero}/>
                <BotonCalc texto="8" color="#2D2D2D" accion={armarNumero}/>
                <BotonCalc texto="9" color="#2D2D2D" accion={armarNumero}/>
                <BotonCalc texto="x" color="#FF9427" accion={btnMultiplicar}/> 
            </View>

            {/* FILA DE BOTONES */}
            <View style={styles.fila}>
                <BotonCalc texto="4" color="#2D2D2D" accion={armarNumero}/>
                <BotonCalc texto="5" color="#2D2D2D" accion={armarNumero}/>
                <BotonCalc texto="6" color="#2D2D2D" accion={armarNumero}/>
                <BotonCalc texto="-" color="#FF9427" accion={btnRestar}/> 
            </View>

            {/* FILA DE BOTONES */}
            <View style={styles.fila}>
                <BotonCalc texto="1" color="#2D2D2D" accion={armarNumero}/>
                <BotonCalc texto="2" color="#2D2D2D" accion={armarNumero}/>
                <BotonCalc texto="3" color="#2D2D2D" accion={armarNumero}/>
                <BotonCalc texto="+" color="#FF9427" accion={btnSumar}/> 
            </View>

            {/* FILA DE BOTONES */}
            <View style={styles.fila}>
                <BotonCalc texto="0" color="#2D2D2D" ancho  accion={armarNumero}/>
                <BotonCalc texto="." color="#2D2D2D"        accion={armarNumero}/>
                <BotonCalc texto="=" color="#2D2D2D"        accion={calcular}/>
            </View>

        </View>
    )
}

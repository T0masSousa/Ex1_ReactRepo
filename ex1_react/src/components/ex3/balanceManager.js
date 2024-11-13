import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deposito, levantamento } from './balanceSlice'; 


const BalanceManager = () => {
  const [valor, setValor] = useState("");
  const dispatch = useDispatch();
  const balance = useSelector((state) => state.saldo.balance);

  const trataDeposito = () => {
    if (valor) {
      dispatch(deposito(Number(valor)));
      setValor("");
    }
  };

  const trataLevantamento = () => {
    if (valor) {
      dispatch(levantamento(Number(valor)));
      setValor("");
    }
  };

  return (
    <div>
      <h3 style={{ textAlign: "center" }}>
        <span style={{ fontWeight: "bold" }}>Saldo Atual:</span> {balance}€
      </h3>

      <input
        style={{ height: "3.5rem", textAlign: "center", fontSize: "2rem" }}
        type="number"
        value={valor}
        onChange={(e) => setValor(e.target.value)}
        placeholder="Valor"
      />
      <button className="btn btn_atm btn__sm" onClick={trataDeposito}>Depositar</button>
      <button className="btn btn_atm btn__sm" onClick={trataLevantamento}>Levantar</button>
    </div>
  );
};

export default BalanceManager;
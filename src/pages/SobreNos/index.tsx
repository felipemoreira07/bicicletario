import Header from '../../components/header/Header';
import { QuemSomos } from '../../components/SobreNos/QuemSomos';
import { NossaMissao } from '../../components/SobreNos/NossaMissao';
import { Oferta } from '../../components/SobreNos/Oferta';
import { PagamentoFacil } from '../../components/SobreNos/PagamentoFacil';

export const SobreNos = () => {
  return (
    <>
      <Header />
      <QuemSomos />
      <NossaMissao />
      <Oferta />
      <PagamentoFacil />
    </>
  );
};

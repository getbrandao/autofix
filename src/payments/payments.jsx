import React, { Component } from 'react';

import ContentHeader from '../common/template/contentHeader';
import Content from '../common/template/content';

import InfoBox from '../common/widget/infoBox';
import Box from '../common/widget/box';
import Row from '../common/layout/row';
import Grid from '../common/layout/grid';

class Payments extends Component {
  render() {
    return (
      <div>
        <main>
          <ContentHeader title="Financeiro" small="Entradas" />
          <Content>
            <Row>
              <Grid cols="12 12 7 8">
              </Grid>
              <Grid cols="12 12 5 4">
                <Row>
                  <InfoBox
                    cols="12"
                    color="green"
                    icon="bank"
                    value="R$ 20"
                    text="Total em Banco"
                    lastupdates="última atualização: 18/10/2017"
                  />
                  <InfoBox
                    cols="12"
                    color="aqua"
                    icon="money"
                    value="R$ 20"
                    text="Total em Caixa"
                    lastupdates="última atualização: 18/10/2017"
                  />
                  <InfoBox
                    cols="12"
                    color="red"
                    icon="credit-card-alt"
                    value="R$ 10" 
                    text="Total em Débitos"
                    lastupdates="última atualização: 18/10/2017"
                  />
                  <InfoBox
                    cols="12"
                    color="yellow"
                    icon="exclamation-triangle"
                    value="R$ 10"
                    text="Saldo Total"
                    lastupdates="última atualização: 18/10/2017"
                  />
                </Row>
              </Grid>
            </Row>
          </Content>
        </main>
      </div>
    )
  };
}

export default Payments;
import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import ContentHeader from '../common/template/contentHeader';
import Content from '../common/template/content';

import InfoBox from '../common/widget/infoBox';
import Box from "../common/widget/box";
import Table from '../common/widget/table';
import Row from '../common/layout/row';
import Grid from '../common/layout/grid';

import Tabs from "../common/tab/tabs";
import TabsHeader from "../common/tab/tabsHeader";
import TabsContent from "../common/tab/tabsContent";

import TabHeader from "../common/tab/tabHeader";
import TabContent from "../common/tab/tabContent";

import { selectTab } from "../common/tab/tabActions";

class Dashboard extends Component {
  componentWillMount() {
    this.props.selectTab("tabSummary");
  }
  render() {
    return <div>
        <main>
          <ContentHeader title="Dashboard" small="version 1.0" />
          <Content>
            <Row>
              <Grid cols="12 12 7 8">
                <Box title="Últimos Lançamentos" color="primary" labelColor="danger" alert="10">
                  <Tabs>
                    <TabsHeader>
                      <TabHeader label="Geral" icon="list" target="tabSummary" />
                      <TabHeader label="Vencidas" icon="exclamation-circle" target="tabWarning" />
                      <TabHeader label="Semanal" icon="tag" target="tabWeekly" />
                      <TabHeader label="Mensal" icon="calendar" target="tabMonthly" />
                    </TabsHeader>
                    <TabsContent>
                      <TabContent id="tabSummary">
                        <Table>
                          <thead>
                            <tr>
                              <th>Detalhes</th>
                              <th>Valor</th>
                              <th>Vencimento</th>
                              <th>Ações</th>
                            </tr>
                          </thead>
                        </Table>
                      </TabContent>
                      <TabContent id="tabWarning">
                        <h1>Criar</h1>
                      </TabContent>
                      <TabContent id="tabWeekly">
                        <h1>Atualizar</h1>
                      </TabContent>
                      <TabContent id="tabMonthly">
                        <h1>Excluir</h1>
                      </TabContent>
                    </TabsContent>
                  </Tabs>
                </Box>
              </Grid>
              <Grid cols="12 12 5 4">
                <Row>
                  <InfoBox cols="12" color="green" icon="bank" value="R$ 20" text="Total em Banco" lastupdates="última atualização: 18/10/2017" />
                  <InfoBox cols="12" color="aqua" icon="money" value="R$ 20" text="Total em Caixa" lastupdates="última atualização: 18/10/2017" />
                  <InfoBox cols="12" color="red" icon="credit-card-alt" value="R$ 10" text="Total em Débitos" lastupdates="última atualização: 18/10/2017" />
                  <InfoBox cols="12" color="yellow" icon="exclamation-triangle" value="R$ 10" text="Saldo Total" lastupdates="última atualização: 18/10/2017" />
                </Row>
              </Grid>
            </Row>
          </Content>
        </main>
      </div>;
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ selectTab }, dispatch);
}

export default connect(null, mapDispatchToProps)(Dashboard);
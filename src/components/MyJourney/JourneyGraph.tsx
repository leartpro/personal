import React from 'react';
import {Gitgraph, Orientation, templateExtend, TemplateName} from "@gitgraph/react";


function JourneyGraph() {
    const colors = ["gray", "green", "gold", "dodgerblue", "steelblue", "slateblue", "blueviolet", "darkmagenta", "darkslateblue", "navy", "indigo"]

    function getCustomHeaderStyle(index: number) {
        return {
            color: colors[index + 3],
            strokeColor: 'transparent',
            bgColor: 'transparent',
            font: '',
            borderRadius: 0,
            pointerWidth: 0,
        }
    }

    let options = {
        orientation: Orientation.VerticalReverse,
        template: templateExtend("metro" as TemplateName, {
            colors: colors,
            branch: {
                label: {
                    display: false,
                },
            },
            commit: {
                message: {
                    displayAuthor: false,
                    displayHash: false
                }
            },
        })
    };
    return (
            <Gitgraph options={options}>
                {gitgraph => {
                    const master = gitgraph.branch("master");
                    master.commit("");
                    let release = gitgraph.branch({
                        name: 'release',
                        from: master,
                    }).commit("");
                    let develop = gitgraph.branch({
                        name: 'develop',
                        from: master,
                    }).commit("");
                    let tictactoe = gitgraph.branch({
                        name: 'tictactoe',
                        from: develop,
                    }).commit("");
                    gitgraph.tag({
                        name: 'TicTacToe:',
                        style: getCustomHeaderStyle(0),
                    });
                    tictactoe.commit("skill learned in tictactoe");
                    develop.merge({
                        branch: tictactoe,
                        commitOptions: {
                            subject: ' ',
                        },
                    });
                    let quap = gitgraph.branch({
                        name: 'quap',
                        from: develop,
                    }).commit("");
                    gitgraph.tag({
                        name: 'Quap:',
                        style: getCustomHeaderStyle(1),
                    });
                    quap.commit("skill learned in quap");
                    develop.merge({
                        branch: quap,
                        commitOptions: {
                            subject: ' ',
                        },
                    });
                    let littSQL = gitgraph.branch({
                        name: 'littsql',
                        from: develop,
                    }).commit("");
                    gitgraph.tag({
                        name: 'littSQL:',
                        style: getCustomHeaderStyle(2),
                    });
                    littSQL.commit("skill learned in littSQL");
                    develop.merge({
                        branch: littSQL,
                        commitOptions: {
                            subject: ' ',
                        },
                    });
                    let sudoku = gitgraph.branch({
                        name: 'sudoku',
                        from: develop,
                    }).commit("");
                    gitgraph.tag({
                        name: 'Sudoku:',
                        style: getCustomHeaderStyle(3),
                    });
                    sudoku.commit("skill learned in sudoku");
                    develop.merge({
                        branch: sudoku,
                        commitOptions: {
                            subject: ' ',
                        },
                    });
                    let bwinf411 = gitgraph.branch({
                        name: 'bwinf 41.1',
                        from: develop,
                    }).commit("");
                    gitgraph.tag({
                        name: 'Bwinf 41.1:',
                        style: getCustomHeaderStyle(4),
                    });
                    bwinf411.commit("skill learned in bwinf 41.1");
                    develop.merge({
                        branch: bwinf411,
                        commitOptions: {
                            subject: ' ',
                        },
                    });
                    let chess4player = gitgraph.branch({
                        name: 'chess4player',
                        from: develop,
                    }).commit("");
                    gitgraph.tag({
                        name: 'Chess4Player:',
                        style: getCustomHeaderStyle(5),
                    });
                    chess4player.commit("skill learned in chess4player");
                    develop.merge({
                        branch: chess4player,
                        commitOptions: {
                            subject: ' ',
                        },
                    });
                    let bwinf412 = gitgraph.branch({
                        name: 'bwinf 41.2',
                        from: develop,
                    }).commit("");
                    gitgraph.tag({
                        name: 'Bwinf 41.2:',
                        style: getCustomHeaderStyle(6),
                    });
                    bwinf412.commit("skill learned in bwinf 41.2");
                    let humanAndMachine = gitgraph.branch({
                        name: 'humanAndMachine',
                        from: develop,
                    }).commit("");
                    gitgraph.tag({
                        name: 'Human & Machine:',
                        style: getCustomHeaderStyle(7),
                    });
                    humanAndMachine.commit("skill learned in Human & Machine");
                    master.commit("");
                    release.commit("");
                    develop.commit("");
                    tictactoe.commit("");
                    quap.commit("");
                    littSQL.commit("");
                    sudoku.commit("");
                    bwinf411.commit("");
                    chess4player.commit("");
                    bwinf412.commit("");
                    humanAndMachine.commit("");

                }}
            </Gitgraph>
    );
}

export default React.memo(JourneyGraph);

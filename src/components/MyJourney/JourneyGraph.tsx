import React from 'react';
import {Gitgraph, Orientation, templateExtend, TemplateName} from "@gitgraph/react";

function JourneyGraph() {

    var customTagStyle = {
        bgColor: 'orange',
        strokeColor: 'orange',
    };

    let options = {
        //mode: Mode.Compact,
        orientation: Orientation.VerticalReverse,
        template: templateExtend("metro" as TemplateName, {
            colors: ["gray", "green", "gold", "dodgerblue", "steelblue", "slateblue", "blueviolet", "darkmagenta", "darkslateblue", "navy"],
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
                    let release = gitgraph.branch("release").commit("");
                    let develop = gitgraph.branch("develop").commit("");
                    gitgraph.tag({
                        name: 'TicTacToe:',
                        style: customTagStyle,
                    });
                    let tictactoe = gitgraph.branch("tictactoe");
                    tictactoe.commit("skill learned in tictactoe");
                    develop.merge(tictactoe);
                    gitgraph.tag({
                        name: 'Quap:',
                        style: customTagStyle,
                    });
                    let quap = gitgraph.branch("quap");
                    quap.commit("skill learned in quap");
                    develop.merge(quap);
                    gitgraph.tag({
                        name: 'littSQL:',
                        style: customTagStyle,
                    });
                    let littSQL = gitgraph.branch("littSQL");
                    littSQL.commit("skill learned in littSQL");
                    develop.merge(littSQL);
                    gitgraph.tag({
                        name: 'Sudoku:',
                        style: customTagStyle,
                    });
                    let sudoku = gitgraph.branch("sudoku");
                    sudoku.commit("skill learned in sudoku");
                    develop.merge(sudoku);
                    gitgraph.tag({
                        name: 'Bwinf 41.1:',
                        style: customTagStyle,
                    });
                    let bwinf411 = gitgraph.branch("bwinf 41.1");
                    bwinf411.commit("skill learned in bwinf 41.1");
                    develop.merge(bwinf411);
                    gitgraph.tag({
                        name: 'Chess4Player:',
                        style: customTagStyle,
                    });
                    let chess4player = gitgraph.branch({
                        name: "chess4player",
                        from: develop,
                    });
                    chess4player.commit("skill learned in chess4player");
                    develop.merge(chess4player);
                    gitgraph.tag({
                        name: 'Bwinf 41.2:',
                        style: customTagStyle,
                    });
                    let bwinf412 = gitgraph.branch("bwinf 41.2");
                    bwinf412.commit("skill learned in bwinf 41.2");
                    release.commit("");
                    master.commit("");
                    develop.commit("");
                    tictactoe.commit("");
                    quap.commit("");
                    littSQL.commit("");
                    sudoku.commit("");
                    bwinf411.commit("");
                    bwinf412.commit("");

                }}
            </Gitgraph>
    );
}

export default React.memo(JourneyGraph);

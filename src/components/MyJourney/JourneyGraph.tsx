import React from 'react';
import {Gitgraph, Orientation, templateExtend, TemplateName} from "@gitgraph/react";


function JourneyGraph() {
    const colors = ["gray", "green", "gold", "dodgerblue", "steelblue", "slateblue", "blueviolet", "darkmagenta", "darkslateblue", "navy", "indigo"]

    function getCustomHeaderStyle(index: number) {
        return {
            color: colors[index + 3],
            strokeColor: 'transparent',
            bgColor: 'transparent',
            font: 'bold 20pt serif',
            borderRadius: 0,
            pointerWidth: 0,
        }
    }

    function getCustomSubHeaderStyle(index: number) {
        return {
            color: colors[index + 3],
            strokeColor: 'transparent',
            bgColor: 'transparent',
            font: 'bold italic 16pt serif',
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
            {
                gitgraph => {
                    let master = gitgraph.branch("master").commit("");
                    let release = gitgraph.branch({name: 'release', from: master,}).commit("");
                    let develop = gitgraph.branch({name: 'develop', from: master,}).commit("");

                    let tictactoe = gitgraph.branch({name: 'tictactoe', from: develop,}).commit("");
                    gitgraph.tag({name: 'TicTacToe:', style: getCustomHeaderStyle(0),});
                    tictactoe.commit("").tag({name: 'Technologies: ', style: getCustomSubHeaderStyle(0)});
                    tictactoe.commit("Git, Java, JavaFx, FXML, JUnit, SQLite, Maven");
                    tictactoe.commit("").tag({name: 'Tools: ', style: getCustomSubHeaderStyle(0)});
                    tictactoe.commit("Github, Intellij, SceneBuilder, Git CLI")
                    tictactoe.commit("").tag({name: 'Skills: ', style: getCustomSubHeaderStyle(0)});
                    tictactoe.commit("cooperative programming, Gitflow, GUI, multi modules project");
                    develop.merge({branch: tictactoe, commitOptions: {subject: ' ',},});

                    let quap = gitgraph.branch({name: 'quap', from: develop,}).commit("");
                    gitgraph.tag({name: 'Quap:', style: getCustomHeaderStyle(1),});
                    quap.commit("").tag({name: 'Technologies:  ', style: getCustomSubHeaderStyle(1)});
                    quap.commit("Git, Java, JavaFx, FXML, JUnit, SQLite, Maven");
                    quap.commit("").tag({name: 'Tools:  ', style: getCustomSubHeaderStyle(1)});
                    quap.commit("Github, Intellij, SceneBuilder, Git CLI")
                    quap.commit("").tag({name: 'Skills:  ', style: getCustomSubHeaderStyle(1)});
                    quap.commit("cooperative programming, Gitflow, GUI, multi modules project");
                    develop.merge({branch: quap, commitOptions: {subject: ' ',},});

                    let littSQL = gitgraph.branch({name: 'littSQL', from: develop,}).commit("");
                    gitgraph.tag({name: 'littSQL:', style: getCustomHeaderStyle(2),});
                    littSQL.commit("").tag({name: 'Technologies:   ', style: getCustomSubHeaderStyle(2)});
                    littSQL.commit("Git, Java, JavaFx, FXML, JUnit, SQLite, Maven");
                    littSQL.commit("").tag({name: 'Tools:   ', style: getCustomSubHeaderStyle(2)});
                    littSQL.commit("Github, Intellij, SceneBuilder, Git CLI")
                    littSQL.commit("").tag({name: 'Skills:   ', style: getCustomSubHeaderStyle(2)});
                    littSQL.commit("cooperative programming, Gitflow, GUI, multi modules project");
                    develop.merge({branch: littSQL, commitOptions: {subject: ' ',},});

                    let sudoku = gitgraph.branch({name: 'sudoku', from: develop,}).commit("");
                    gitgraph.tag({name: 'Sudoku:', style: getCustomHeaderStyle(3),});
                    sudoku.commit("").tag({name: 'Technologies:    ', style: getCustomSubHeaderStyle(3)});
                    sudoku.commit("Git, Java, JavaFx, FXML, JUnit, SQLite, Maven");
                    sudoku.commit("").tag({name: 'Tools:    ', style: getCustomSubHeaderStyle(3)});
                    sudoku.commit("Github, Intellij, SceneBuilder, Git CLI")
                    sudoku.commit("").tag({name: 'Skills:    ', style: getCustomSubHeaderStyle(3)});
                    sudoku.commit("cooperative programming, Gitflow, GUI, multi modules project");
                    develop.merge({branch: sudoku, commitOptions: {subject: ' ',},});

                    let bwinf411 = gitgraph.branch({name: 'bwinf411', from: develop,}).commit("");
                    gitgraph.tag({name: 'BWINF 41.1:', style: getCustomHeaderStyle(4),});
                    bwinf411.commit("").tag({name: 'Technologies:     ', style: getCustomSubHeaderStyle(4)});
                    bwinf411.commit("Git, Java, JavaFx, FXML, JUnit, SQLite, Maven");
                    bwinf411.commit("").tag({name: 'Tools:     ', style: getCustomSubHeaderStyle(4)});
                    bwinf411.commit("Github, Intellij, SceneBuilder, Git CLI")
                    bwinf411.commit("").tag({name: 'Skills:     ', style: getCustomSubHeaderStyle(4)});
                    bwinf411.commit("cooperative programming, Gitflow, GUI, multi modules project");
                    develop.merge({branch: bwinf411, commitOptions: {subject: ' ',},});

                    let chess4player = gitgraph.branch({name: 'chess4player', from: develop,}).commit("");
                    gitgraph.tag({name: 'Chess4Player:', style: getCustomHeaderStyle(5),});
                    chess4player.commit("").tag({name: 'Technologies:      ', style: getCustomSubHeaderStyle(5)});
                    chess4player.commit("Git, Java, JavaFx, FXML, JUnit, SQLite, Maven");
                    chess4player.commit("").tag({name: 'Tools:      ', style: getCustomSubHeaderStyle(5)});
                    chess4player.commit("Github, Intellij, SceneBuilder, Git CLI")
                    chess4player.commit("").tag({name: 'Skills:      ', style: getCustomSubHeaderStyle(5)});
                    chess4player.commit("cooperative programming, Gitflow, GUI, multi modules project");
                    develop.merge({branch: chess4player, commitOptions: {subject: ' ',},});

                    let bwinf412 = gitgraph.branch({name: 'bwinf412', from: develop,}).commit("");
                    gitgraph.tag({name: 'BWINF 41.2:', style: getCustomHeaderStyle(6),});
                    bwinf412.commit("").tag({name: 'Technologies:       ', style: getCustomSubHeaderStyle(6)});
                    bwinf412.commit("Git, Java, JavaFx, FXML, JUnit, SQLite, Maven");
                    bwinf412.commit("").tag({name: 'Tools:       ', style: getCustomSubHeaderStyle(6)});
                    bwinf412.commit("Github, Intellij, SceneBuilder, Git CLI")
                    bwinf412.commit("").tag({name: 'Skills:       ', style: getCustomSubHeaderStyle(6)});
                    bwinf412.commit("cooperative programming, Gitflow, GUI, multi modules project");
                    develop.merge({branch: bwinf412, commitOptions: {subject: ' ',},});

                    let humanAndMachine = gitgraph.branch({name: 'humanAndMachine', from: develop,}).commit("");
                    gitgraph.tag({name: 'Human & Machine:', style: getCustomHeaderStyle(7),});
                    humanAndMachine.commit("").tag({name: 'Technologies:        ', style: getCustomSubHeaderStyle(7)});
                    humanAndMachine.commit("Git, Java, JavaFx, FXML, JUnit, SQLite, Maven");
                    humanAndMachine.commit("").tag({name: 'Tools:        ', style: getCustomSubHeaderStyle(7)});
                    humanAndMachine.commit("Github, Intellij, SceneBuilder, Git CLI")
                    humanAndMachine.commit("").tag({name: 'Skills:         ', style: getCustomSubHeaderStyle(7)});
                    humanAndMachine.commit("cooperative programming, Gitflow, GUI, multi modules project");
                    develop.merge({branch: humanAndMachine, commitOptions: {subject: ' ',},});

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
                }
            }
        </Gitgraph>
    );
}

export default React.memo(JourneyGraph);

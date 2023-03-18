import React from 'react';
import {Gitgraph, Orientation, templateExtend, TemplateName} from "@gitgraph/react";


function ProjectGraph() {
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
                    quap.commit("Git, Java, JavaFx, FXML, JUnit, SCSS, JSON, SQLite, Postgres, Maven");
                    quap.commit("").tag({name: 'Tools:  ', style: getCustomSubHeaderStyle(1)});
                    quap.commit("Github, Intellij, SceneBuilder, Git CLI, Datagrip")
                    quap.commit("").tag({name: 'Skills:  ', style: getCustomSubHeaderStyle(1)});
                    quap.commit("network technology, software design, database, socket programming, multithreading");
                    develop.merge({branch: quap, commitOptions: {subject: ' ',},});

                    let littSQL = gitgraph.branch({name: 'littSQL', from: develop,}).commit("");
                    gitgraph.tag({name: 'littSQL:', style: getCustomHeaderStyle(2),});
                    littSQL.commit("").tag({name: 'Technologies:   ', style: getCustomSubHeaderStyle(2)});
                    littSQL.commit("Svelte, vue, Carbon Design System, golang, Postgres, SCSS, Typescript, Git");
                    littSQL.commit("").tag({name: 'Tools:   ', style: getCustomSubHeaderStyle(2)});
                    littSQL.commit("Webstorm, Datagrip, Goland, Figma, Miro, Postman, Github")
                    littSQL.commit("").tag({name: 'Skills:   ', style: getCustomSubHeaderStyle(2)});
                    littSQL.commit("frontend, design, cooperative programming");
                    develop.merge({branch: littSQL, commitOptions: {subject: ' ',},});

                    let sudoku = gitgraph.branch({name: 'sudoku', from: develop,}).commit("");
                    gitgraph.tag({name: 'Sudoku:', style: getCustomHeaderStyle(3),});
                    sudoku.commit("").tag({name: 'Technologies:    ', style: getCustomSubHeaderStyle(3)});
                    sudoku.commit("Java, Git, Maven");
                    sudoku.commit("").tag({name: 'Tools:    ', style: getCustomSubHeaderStyle(3)});
                    sudoku.commit("Github, Intellij")
                    sudoku.commit("").tag({name: 'Skills:    ', style: getCustomSubHeaderStyle(3)});
                    sudoku.commit("theoretical computer science, recursion algorithmic");
                    develop.merge({branch: sudoku, commitOptions: {subject: ' ',},});

                    let bwinf411 = gitgraph.branch({name: 'bwinf411', from: develop,}).commit("");
                    gitgraph.tag({name: 'BWINF 41.1:', style: getCustomHeaderStyle(4),});
                    bwinf411.commit("").tag({name: 'Technologies:     ', style: getCustomSubHeaderStyle(4)});
                    bwinf411.commit("Java, Git, Latex");
                    bwinf411.commit("").tag({name: 'Tools:     ', style: getCustomSubHeaderStyle(4)});
                    bwinf411.commit("Github, Intellij, Texmaker")
                    bwinf411.commit("").tag({name: 'Skills:     ', style: getCustomSubHeaderStyle(4)});
                    bwinf411.commit("algorithm solution, writing latex documents");
                    develop.merge({branch: bwinf411, commitOptions: {subject: ' ',},});

                    let chess4player = gitgraph.branch({name: 'chess4player', from: develop,}).commit("");
                    gitgraph.tag({name: 'Chess4Player:', style: getCustomHeaderStyle(5),});
                    chess4player.commit("").tag({name: 'Technologies:      ', style: getCustomSubHeaderStyle(5)});
                    chess4player.commit("Golang, Flutter, Dart, Git");
                    chess4player.commit("").tag({name: 'Tools:      ', style: getCustomSubHeaderStyle(5)});
                    chess4player.commit("Goland, Android Studio")
                    chess4player.commit("").tag({name: 'Skills:      ', style: getCustomSubHeaderStyle(5)});
                    chess4player.commit("cooperative programming, parallel programming, websockets");
                    develop.merge({branch: chess4player, commitOptions: {subject: ' ',},});

                    let bwinf412 = gitgraph.branch({name: 'bwinf412', from: develop,}).commit("");
                    gitgraph.tag({name: 'BWINF 41.2:', style: getCustomHeaderStyle(6),});
                    bwinf412.commit("").tag({name: 'Technologies:       ', style: getCustomSubHeaderStyle(6)});
                    bwinf412.commit("C++, Git, Latex");
                    bwinf412.commit("").tag({name: 'Tools:       ', style: getCustomSubHeaderStyle(6)});
                    bwinf412.commit("Clion, Github, Texmaker")
                    bwinf412.commit("").tag({name: 'Skills:       ', style: getCustomSubHeaderStyle(6)});
                    bwinf412.commit("advanced tsp-/knapsack-problem solver, theoretical computer science");
                    develop.merge({branch: bwinf412, commitOptions: {subject: ' ',},});

                    let humanAndMachine = gitgraph.branch({name: 'humanAndMachine', from: develop,}).commit("");
                    gitgraph.tag({name: 'Human & Machine:', style: getCustomHeaderStyle(7),});
                    humanAndMachine.commit("").tag({name: 'Technologies:        ', style: getCustomSubHeaderStyle(7)});
                    humanAndMachine.commit("C#");
                    humanAndMachine.commit("").tag({name: 'Tools:        ', style: getCustomSubHeaderStyle(7)});
                    humanAndMachine.commit("Unity, Asesprite, Rider, Github")
                    humanAndMachine.commit("").tag({name: 'Skills:         ', style: getCustomSubHeaderStyle(7)});
                    humanAndMachine.commit("game development, graphic design, graphic animation, game design");
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

export default React.memo(ProjectGraph);

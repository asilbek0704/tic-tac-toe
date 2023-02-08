let amountOfRounds;
let xWinsCounter = 0;
let oWinsCounter = 0;

let options;

let turn = 1;
let clickCounter = 0;

function eng() {
    $(".modal__lang").after(
        `
    <div class="modal__players">
    <h3>Options</h3>
    <div class="name">
        <div class="players">
            <div class="player1 player">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="50" fill="purple"
                    class="bi bi-person-fill" viewBox="0 0 16 16">
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                </svg>
                <span style="color: purple">X</span>

                <input style="color: purple" minlength="2" maxlength="12" type="text"
                    placeholder="Enter your name" />

                <div class="colors">
                    <div></div>
                    <div class="active1"></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>

            <div class="player2 player">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="50" fill="green"
                    class="bi bi-person-fill" viewBox="0 0 16 16">
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                </svg>
                <span style="color: green">O</span>
                <input style="color: green" minlength="2" maxlength="12" type="text"
                    placeholder="Enter your name" />

                <div class="colors">
                    <div></div>
                    <div></div>
                    <div class="active2"></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    </div>

    <h3>Rounds</h3>
    <div class="amountOfR">
        <button class="left">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                stroke="currentColor" class="bi bi-chevron-double-left" viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                    d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                <path fill-rule="evenodd"
                    d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
            </svg>
        </button>

        <span class="numofR">1</span>

        <button class="right">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                stroke="currentColor" class="bi bi-chevron-double-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                    d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z" />
                <path fill-rule="evenodd"
                    d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z" />
            </svg>
        </button>
    </div>

    <div class="confirm">
        <button class="skip" href="#!">SKIP</button>
        <button class="play" disabled href="#!">PLAY</button>
    </div>
</div>

<div class="grid">
    <div class="cell one"></div>
    <div class="cell two"></div>
    <div class="cell three"></div>
    <div class="cell four"></div>
    <div class="cell five"></div>
    <div class="cell six"></div>
    <div class="cell seven"></div>
    <div class="cell eight"></div>
    <div class="cell nine"></div>
</div>

<div class="result hidden">
    <div class="players">
        <div class="player1 player">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="60" fill="purple"
                class="bi bi-person-fill" viewBox="0 0 16 16">
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
            </svg>
            <span style="color: purple">X</span>

            <p class="player-name">PLAYER-1</p>
            <p class="score">1</p>
        </div>

        <div class="player2 player">
            <!-- <p>WINNER 🎉</p> -->

            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="60" fill="green"
                class="bi bi-person-fill" viewBox="0 0 16 16">
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
            </svg>
            <span style="color: green">O</span>
            <p class="player-name">PLAYER-2</p>
            <p class="score">2</p>
        </div>
    </div>
    <button type="button">OK</button>
</div>

<div class="watch-overlay hidden">
    <video src="video/tutorial.mp4" controls></video>
    <div class="close">
        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="white" class="bi bi-x close"
            viewBox="0 0 16 16">
            <path class="close"
                d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
        </svg>
    </div>
</div>

<a class="tutorial-btn" href="#!">TIC-TAC-TOE tutorial</a>
    `
    );

    $(".amountOfR button").each(function () {
        amountOfRounds = 1;

        if (amountOfRounds == 1) {
            $(".amountOfR button.left").attr("disabled", true);
        }

        $(this).on("click", () => {
            if ($(this).hasClass("right")) {
                $(".amountOfR span.numofR").html(++amountOfRounds);
                $(".amountOfR button.left").attr("disabled", false);

                if (amountOfRounds == 7) {
                    $(this).attr("disabled", true);
                }
            } else {
                $(".amountOfR span.numofR").html(--amountOfRounds);

                $(".amountOfR button.right").attr("disabled", false);

                if (amountOfRounds == 1) {
                    $(this).attr("disabled", true);
                }
            }
        });
    });

    $(".player1 .colors div").each(function () {
        $(this).on("click", () => {
            $(".player1 .colors div").each(function () {
                $(this).removeClass("active1");
            });

            $(this).addClass("active1");

            let color = $(this).css("backgroundColor");

            $(".player1 span").css("color", `${color}`);
            $(".player1 input").css("color", `${color}`);
            $(".player1 svg").css("fill", `${color}`);
        });
    });

    $(".player2 .colors div").each(function () {
        $(this).on("click", () => {
            $(".player2 .colors div").each(function () {
                $(this).removeClass("active2");
            });

            $(this).addClass("active2");

            let color = $(this).css("backgroundColor");

            $(".player2 span").css("color", `${color}`);
            $(".player2 input").css("color", `${color}`);
            $(".player2 svg").css("fill", `${color}`);
        });
    });

    $(".player input").each(function () {
        $(this).on("change", () => {
            if (
                $(".player1 input").val().length > 0 &&
                $(".player2 input").val().length > 0
            ) {
                $(".confirm button.play").attr("disabled", false);
            } else {
                $(".confirm button.play").attr("disabled", true);
            }
        });
    });

    $(".confirm button").each(function () {
        $(this).on("click", () => {
            if ($(this).hasClass("play")) {
                options = {
                    player1: {
                        color: $("div.active1").css("backgroundColor"),
                        playerName:
                            $(".player1 input").val() != ""
                                ? $(".player1 input").val()
                                : "PLAYER-1",
                    },
                    player2: {
                        color: $("div.active2").css("backgroundColor"),
                        playerName:
                            $(".player2 input").val() != ""
                                ? $(".player2 input").val()
                                : "PLAYER-2",
                    },
                    rounds: $(".numofR").html(),
                };
            } else if ($(this).hasClass("skip")) {
                options = {
                    player1: {
                        color: $("div.active1").css("backgroundColor"),
                        playerName: "PLAYER-1",
                    },
                    player2: {
                        color: $("div.active2").css("backgroundColor"),
                        playerName: "PLAYER-2",
                    },
                    rounds: 1,
                };
            }

            $('.content').css('backgroundImage', 'none');
            $('.content').css('backgroundColor', '#000');

            $(".modal__players").addClass("hidden");

            $(".grid").on("click", (e) => {
                let currentTarget = e.target.closest("div.cell");

                if ($(currentTarget).children().hasClass("bi-circle")) {
                    $(currentTarget).html(`
                    <svg xmlns="http://www.w3.org/2000/svg" width="105" height="105" fill="${options.player2.color}" class="bi bi-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    </svg>`);

                    clickCounter;
                } else if ($(currentTarget).children().hasClass("bi-x")) {
                    $(currentTarget).html(`
                    <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" fill="${options.player1.color}" class="bi bi-x" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                    </svg>`);

                    clickCounter;
                } else {
                    if (turn == 1) {
                        $(currentTarget).html(`
                    <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" fill="${options.player1.color}" class="bi bi-x" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                    </svg>`);

                        turn = 2;

                        clickCounter++;
                    } else {
                        $(currentTarget).html(`
                        <svg xmlns="http://www.w3.org/2000/svg" width="105" height="105" fill="${options.player2.color}" class="bi bi-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        </svg>`);

                        turn = 1;

                        clickCounter++;
                    }
                }

                if (
                    ($(".cell.one").children().hasClass("bi-x") &&
                        $(".cell.two").children().hasClass("bi-x") &&
                        $(".cell.three").children().hasClass("bi-x")) ||
                    ($(".cell.four").children().hasClass("bi-x") &&
                        $(".cell.five").children().hasClass("bi-x") &&
                        $(".cell.six").children().hasClass("bi-x")) ||
                    ($(".cell.seven").children().hasClass("bi-x") &&
                        $(".cell.eight").children().hasClass("bi-x") &&
                        $(".cell.nine").children().hasClass("bi-x")) ||
                    ($(".cell.one").children().hasClass("bi-x") &&
                        $(".cell.four").children().hasClass("bi-x") &&
                        $(".cell.seven").children().hasClass("bi-x")) ||
                    ($(".cell.two").children().hasClass("bi-x") &&
                        $(".cell.five").children().hasClass("bi-x") &&
                        $(".cell.eight").children().hasClass("bi-x")) ||
                    ($(".cell.three").children().hasClass("bi-x") &&
                        $(".cell.six").children().hasClass("bi-x") &&
                        $(".cell.nine").children().hasClass("bi-x")) ||
                    ($(".cell.one").children().hasClass("bi-x") &&
                        $(".cell.five").children().hasClass("bi-x") &&
                        $(".cell.nine").children().hasClass("bi-x")) ||
                    ($(".cell.three").children().hasClass("bi-x") &&
                        $(".cell.five").children().hasClass("bi-x") &&
                        $(".cell.seven").children().hasClass("bi-x"))
                ) {
                    setTimeout(() => {
                        alert(
                            `Congratulations, ${options.player1.playerName} won this round!`
                        );
                        xWinsCounter++;
                        nextRound();
                    }, 500);
                } else if (
                    ($(".cell.one").children().hasClass("bi-circle") &&
                        $(".cell.two").children().hasClass("bi-circle") &&
                        $(".cell.three").children().hasClass("bi-circle")) ||
                    ($(".cell.four").children().hasClass("bi-circle") &&
                        $(".cell.five").children().hasClass("bi-circle") &&
                        $(".cell.six").children().hasClass("bi-circle")) ||
                    ($(".cell.seven").children().hasClass("bi-circle") &&
                        $(".cell.eight").children().hasClass("bi-circle") &&
                        $(".cell.nine").children().hasClass("bi-circle")) ||
                    ($(".cell.one").children().hasClass("bi-circle") &&
                        $(".cell.four").children().hasClass("bi-circle") &&
                        $(".cell.seven").children().hasClass("bi-circle")) ||
                    ($(".cell.two").children().hasClass("bi-circle") &&
                        $(".cell.five").children().hasClass("bi-circle") &&
                        $(".cell.eight").children().hasClass("bi-circle")) ||
                    ($(".cell.three").children().hasClass("bi-circle") &&
                        $(".cell.six").children().hasClass("bi-circle") &&
                        $(".cell.nine").children().hasClass("bi-circle")) ||
                    ($(".cell.one").children().hasClass("bi-circle") &&
                        $(".cell.five").children().hasClass("bi-circle") &&
                        $(".cell.nine").children().hasClass("bi-circle")) ||
                    ($(".cell.three").children().hasClass("bi-circle") &&
                        $(".cell.five").children().hasClass("bi-circle") &&
                        $(".cell.seven").children().hasClass("bi-circle"))
                ) {
                    setTimeout(() => {
                        alert(
                            `Congratulations, ${options.player2.playerName} won this round!`
                        );
                        oWinsCounter++;
                        nextRound();
                    }, 300);
                } else if (clickCounter == 9) {
                    setTimeout(() => {
                        alert("Draw");
                        nextRound();
                    }, 300);
                }
            });
        });
    });

    function nextRound() {
        $(".grid").html(`
                    <div class="cell one"></div>
                    <div class="cell two"></div>
                    <div class="cell three"></div>
                    <div class="cell four"></div>
                    <div class="cell five"></div>
                    <div class="cell six"></div>
                    <div class="cell seven"></div>
                    <div class="cell eight"></div>
                    <div class="cell nine"></div>
        `);

        turn = 1;
        clickCounter = 0;

        if (options.rounds > 1) {
            options.rounds--;
        } else {
            $(".player1 .score").text(xWinsCounter);
            $(".player1 .player-name").text(options.player1.playerName);
            $(".player1 span").css("color", `${options.player1.color}`);
            $(".player1 svg").css("fill", `${options.player1.color}`);

            $(".player2 .score").text(oWinsCounter);
            $(".player2 .player-name").text(options.player2.playerName);
            $(".player2 span").css("color", `${options.player2.color}`);
            $(".player2 svg").css("fill", `${options.player2.color}`);

            if (xWinsCounter > oWinsCounter) {
                $(".player1").prepend('<p class="emoji">WINNER 🎉</p>');
            } else if (xWinsCounter < oWinsCounter) {
                $(".player2").prepend('<p class="emoji">WINNER 🎉</p>');
            } else {
                $(".player1").prepend('<p class="emoji">DRAW 💥</p>');
                $(".player2").prepend('<p class="emoji">DRAW 💥</p>');
            }

            $(".result").removeClass("hidden");
        }
    }

    $(".result button").on("click", () => {
        location.reload();
    });

    $(document).on("click", (e) => {
        let target = e.target;

        if (
            $(target).hasClass("close") ||
            $(target).hasClass("watch-overlay")
        ) {
            $(".watch-overlay").addClass("hidden");
            $(".watch-overlay video").trigger("pause");
        }
    });

    $(".tutorial-btn").on("click", (e) => {
        e.preventDefault();
        $(".watch-overlay").removeClass("hidden");

        $(".watch-overlay video").trigger("play");
    });
}


function rus() {
    $(".modal__lang").after(
        `
    <div class="modal__players">
    <h3>Настройки</h3>
    <div class="name">
        <div class="players">
            <div class="player1 player">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="50" fill="purple"
                    class="bi bi-person-fill" viewBox="0 0 16 16">
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                </svg>
                <span style="color: purple">X</span>

                <input style="color: purple" minlength="2" maxlength="12" type="text"
                    placeholder="Введите имя" />

                <div class="colors">
                    <div></div>
                    <div class="active1"></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>

            <div class="player2 player">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="50" fill="green"
                    class="bi bi-person-fill" viewBox="0 0 16 16">
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                </svg>
                <span style="color: green">O</span>
                <input style="color: green" minlength="2" maxlength="12" type="text"
                    placeholder="Введите имя" />

                <div class="colors">
                    <div></div>
                    <div></div>
                    <div class="active2"></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    </div>

    <h3>Раунды</h3>
    <div class="amountOfR">
        <button class="left">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                stroke="currentColor" class="bi bi-chevron-double-left" viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                    d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                <path fill-rule="evenodd"
                    d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
            </svg>
        </button>

        <span class="numofR">1</span>

        <button class="right">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                stroke="currentColor" class="bi bi-chevron-double-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                    d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z" />
                <path fill-rule="evenodd"
                    d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z" />
            </svg>
        </button>
    </div>

    <div class="confirm">
        <button class="skip" href="#!">Пропустить</button>
        <button class="play" disabled href="#!">Играть</button>
    </div>
</div>

<div class="grid">
    <div class="cell one"></div>
    <div class="cell two"></div>
    <div class="cell three"></div>
    <div class="cell four"></div>
    <div class="cell five"></div>
    <div class="cell six"></div>
    <div class="cell seven"></div>
    <div class="cell eight"></div>
    <div class="cell nine"></div>
</div>

<div class="result hidden">
    <div class="players">
        <div class="player1 player">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="60" fill="purple"
                class="bi bi-person-fill" viewBox="0 0 16 16">
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
            </svg>
            <span style="color: purple">X</span>

            <p class="player-name">Игрок-1</p>
            <p class="score">1</p>
        </div>

        <div class="player2 player">

            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="60" fill="green"
                class="bi bi-person-fill" viewBox="0 0 16 16">
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
            </svg>
            <span style="color: green">O</span>
            <p class="player-name">Игрок-2</p>
            <p class="score">2</p>
        </div>
    </div>
    <button type="button">OK</button>
</div>

<div class="watch-overlay hidden">
    <video src="video/tutorial.mp4" controls></video>
    <div class="close">
        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="white" class="bi bi-x close"
            viewBox="0 0 16 16">
            <path class="close"
                d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
        </svg>
    </div>
</div>

<a class="tutorial-btn" href="#!">TIC-TAC-TOE Обучение</a>
    `
    );

    $(".amountOfR button").each(function () {
        amountOfRounds = 1;

        if (amountOfRounds == 1) {
            $(".amountOfR button.left").attr("disabled", true);
        }

        $(this).on("click", () => {
            if ($(this).hasClass("right")) {
                $(".amountOfR span.numofR").html(++amountOfRounds);
                $(".amountOfR button.left").attr("disabled", false);

                if (amountOfRounds == 7) {
                    $(this).attr("disabled", true);
                }
            } else {
                $(".amountOfR span.numofR").html(--amountOfRounds);

                $(".amountOfR button.right").attr("disabled", false);

                if (amountOfRounds == 1) {
                    $(this).attr("disabled", true);
                }
            }
        });
    });

    $(".player1 .colors div").each(function () {
        $(this).on("click", () => {
            $(".player1 .colors div").each(function () {
                $(this).removeClass("active1");
            });

            $(this).addClass("active1");

            let color = $(this).css("backgroundColor");

            $(".player1 span").css("color", `${color}`);
            $(".player1 input").css("color", `${color}`);
            $(".player1 svg").css("fill", `${color}`);
        });
    });

    $(".player2 .colors div").each(function () {
        $(this).on("click", () => {
            $(".player2 .colors div").each(function () {
                $(this).removeClass("active2");
            });

            $(this).addClass("active2");

            let color = $(this).css("backgroundColor");

            $(".player2 span").css("color", `${color}`);
            $(".player2 input").css("color", `${color}`);
            $(".player2 svg").css("fill", `${color}`);
        });
    });

    $(".player input").each(function () {
        $(this).on("change", () => {
            if (
                $(".player1 input").val().length > 0 &&
                $(".player2 input").val().length > 0
            ) {
                $(".confirm button.play").attr("disabled", false);
            } else {
                $(".confirm button.play").attr("disabled", true);
            }
        });
    });

    $(".confirm button").each(function () {
        $(this).on("click", () => {
            if ($(this).hasClass("play")) {
                options = {
                    player1: {
                        color: $("div.active1").css("backgroundColor"),
                        playerName:
                            $(".player1 input").val() != ""
                                ? $(".player1 input").val()
                                : "Игрок-1",
                    },
                    player2: {
                        color: $("div.active2").css("backgroundColor"),
                        playerName:
                            $(".player2 input").val() != ""
                                ? $(".player2 input").val()
                                : "Игрок-2",
                    },
                    rounds: $(".numofR").html(),
                };
            } else if ($(this).hasClass("skip")) {
                options = {
                    player1: {
                        color: $("div.active1").css("backgroundColor"),
                        playerName: "Игрок-1",
                    },
                    player2: {
                        color: $("div.active2").css("backgroundColor"),
                        playerName: "Игрок-2",
                    },
                    rounds: 1,
                };
            }

            $('.content').css('backgroundImage', 'none');
            $('.content').css('backgroundColor', '#000');

            $(".modal__players").addClass("hidden");

            $(".grid").on("click", (e) => {
                let currentTarget = e.target.closest("div.cell");

                if ($(currentTarget).children().hasClass("bi-circle")) {
                    $(currentTarget).html(`
                    <svg xmlns="http://www.w3.org/2000/svg" width="105" height="105" fill="${options.player2.color}" class="bi bi-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    </svg>`);

                    clickCounter;
                } else if ($(currentTarget).children().hasClass("bi-x")) {
                    $(currentTarget).html(`
                    <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" fill="${options.player1.color}" class="bi bi-x" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                    </svg>`);

                    clickCounter;
                } else {
                    if (turn == 1) {
                        $(currentTarget).html(`
                    <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" fill="${options.player1.color}" class="bi bi-x" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                    </svg>`);

                        turn = 2;

                        clickCounter++;
                    } else {
                        $(currentTarget).html(`
                        <svg xmlns="http://www.w3.org/2000/svg" width="105" height="105" fill="${options.player2.color}" class="bi bi-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        </svg>`);

                        turn = 1;

                        clickCounter++;
                    }
                }

                if (
                    ($(".cell.one").children().hasClass("bi-x") &&
                        $(".cell.two").children().hasClass("bi-x") &&
                        $(".cell.three").children().hasClass("bi-x")) ||
                    ($(".cell.four").children().hasClass("bi-x") &&
                        $(".cell.five").children().hasClass("bi-x") &&
                        $(".cell.six").children().hasClass("bi-x")) ||
                    ($(".cell.seven").children().hasClass("bi-x") &&
                        $(".cell.eight").children().hasClass("bi-x") &&
                        $(".cell.nine").children().hasClass("bi-x")) ||
                    ($(".cell.one").children().hasClass("bi-x") &&
                        $(".cell.four").children().hasClass("bi-x") &&
                        $(".cell.seven").children().hasClass("bi-x")) ||
                    ($(".cell.two").children().hasClass("bi-x") &&
                        $(".cell.five").children().hasClass("bi-x") &&
                        $(".cell.eight").children().hasClass("bi-x")) ||
                    ($(".cell.three").children().hasClass("bi-x") &&
                        $(".cell.six").children().hasClass("bi-x") &&
                        $(".cell.nine").children().hasClass("bi-x")) ||
                    ($(".cell.one").children().hasClass("bi-x") &&
                        $(".cell.five").children().hasClass("bi-x") &&
                        $(".cell.nine").children().hasClass("bi-x")) ||
                    ($(".cell.three").children().hasClass("bi-x") &&
                        $(".cell.five").children().hasClass("bi-x") &&
                        $(".cell.seven").children().hasClass("bi-x"))
                ) {
                    setTimeout(() => {
                        alert(
                            `Поздравляем, ${options.player1.playerName} выиграл этот раунд!`
                        );
                        xWinsCounter++;
                        nextRound();
                    }, 500);
                } else if (
                    ($(".cell.one").children().hasClass("bi-circle") &&
                        $(".cell.two").children().hasClass("bi-circle") &&
                        $(".cell.three").children().hasClass("bi-circle")) ||
                    ($(".cell.four").children().hasClass("bi-circle") &&
                        $(".cell.five").children().hasClass("bi-circle") &&
                        $(".cell.six").children().hasClass("bi-circle")) ||
                    ($(".cell.seven").children().hasClass("bi-circle") &&
                        $(".cell.eight").children().hasClass("bi-circle") &&
                        $(".cell.nine").children().hasClass("bi-circle")) ||
                    ($(".cell.one").children().hasClass("bi-circle") &&
                        $(".cell.four").children().hasClass("bi-circle") &&
                        $(".cell.seven").children().hasClass("bi-circle")) ||
                    ($(".cell.two").children().hasClass("bi-circle") &&
                        $(".cell.five").children().hasClass("bi-circle") &&
                        $(".cell.eight").children().hasClass("bi-circle")) ||
                    ($(".cell.three").children().hasClass("bi-circle") &&
                        $(".cell.six").children().hasClass("bi-circle") &&
                        $(".cell.nine").children().hasClass("bi-circle")) ||
                    ($(".cell.one").children().hasClass("bi-circle") &&
                        $(".cell.five").children().hasClass("bi-circle") &&
                        $(".cell.nine").children().hasClass("bi-circle")) ||
                    ($(".cell.three").children().hasClass("bi-circle") &&
                        $(".cell.five").children().hasClass("bi-circle") &&
                        $(".cell.seven").children().hasClass("bi-circle"))
                ) {
                    setTimeout(() => {
                        alert(
                            `Поздравляем, ${options.player2.playerName} выиграл этот раунд!`
                        );
                        oWinsCounter++;
                        nextRound();
                    }, 300);
                } else if (clickCounter == 9) {
                    setTimeout(() => {
                        alert("Ничья в этом раунде");
                        nextRound();
                    }, 300);
                }
            });
        });
    });

    function nextRound() {
        $(".grid").html(`
                    <div class="cell one"></div>
                    <div class="cell two"></div>
                    <div class="cell three"></div>
                    <div class="cell four"></div>
                    <div class="cell five"></div>
                    <div class="cell six"></div>
                    <div class="cell seven"></div>
                    <div class="cell eight"></div>
                    <div class="cell nine"></div>
        `);

        turn = 1;
        clickCounter = 0;

        if (options.rounds > 1) {
            options.rounds--;
        } else {
            $(".player1 .score").text(xWinsCounter);
            $(".player1 .player-name").text(options.player1.playerName);
            $(".player1 span").css("color", `${options.player1.color}`);
            $(".player1 svg").css("fill", `${options.player1.color}`);

            $(".player2 .score").text(oWinsCounter);
            $(".player2 .player-name").text(options.player2.playerName);
            $(".player2 span").css("color", `${options.player2.color}`);
            $(".player2 svg").css("fill", `${options.player2.color}`);

            if (xWinsCounter > oWinsCounter) {
                $(".player1").prepend('<p class="emoji">Победитель 🎉</p>');
            } else if (xWinsCounter < oWinsCounter) {
                $(".player2").prepend('<p class="emoji">Победитель 🎉</p>');
            } else {
                $(".player1").prepend('<p class="emoji">Ничья 💥</p>');
                $(".player2").prepend('<p class="emoji">Ничья 💥</p>');
            }

            $(".result").removeClass("hidden");
        }
    }

    $(".result button").on("click", () => {
        location.reload();
    });

    $(document).on("click", (e) => {
        let target = e.target;

        if (
            $(target).hasClass("close") ||
            $(target).hasClass("watch-overlay")
        ) {
            $(".watch-overlay").addClass("hidden");
            $(".watch-overlay video").trigger("pause");
        }
    });

    $(".tutorial-btn").on("click", (e) => {
        e.preventDefault();
        $(".watch-overlay").removeClass("hidden");

        $(".watch-overlay video").trigger("play");
    });
}











$(".langs .lang").each(function () {
    $(this).on("click", () => {
        $(".langs .lang").each(function () {
            $(this).removeClass("active");
        });

        $(this).addClass("active");
    });
});

$(".modal__lang button").on("click", () => {
    $(".modal__lang").addClass("hidden");
    if ($(".langs .lang.active").hasClass("eng")) {
        eng();
    } else {
        rus();
    }
});

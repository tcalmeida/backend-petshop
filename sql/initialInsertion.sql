INSERT INTO User VALUES(
	1, 
	"NomeTeste", 
	"teste1@teste.com", 
	"a1b2c3d4e5",
    "5505191456723",
	"2013-07-13",
    "2013-07-14");

INSERT INTO Service VALUES(1, "ServicoTeste", 42.25);

INSERT INTO Worker VALUES(
	1, 
	"TrabalhadorTeste", 
	"teste@empresa.com", 
	"5e6f7o9a",
	"2013-07-17",
    "2013-07-18");

INSERT INTO Reservation VALUES(
	1, 
	1, 
	1, 
	1,
	"2013-07-17",
    "2013-07-18");
    
SELECT * FROM User;
SELECT * FROM Service;
SELECT * FROM Worker;
SELECT * FROM Reservation;
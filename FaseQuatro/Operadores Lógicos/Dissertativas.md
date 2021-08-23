# Questões dissertativas da lista de Operadores Lógicos FaseQuatro

1. *Qual a diferença entre operadores unários e binários?*

* Operadores unários executam com apenas um operando, operadores binários precisam de dois operandos para executar.

2. *O que é a tabela verdade?*
* Tabela verdade é um dispositivo utilizado no estudo da lógica matemática. Com o uso desta tabela é possível definir o valor lógico de uma proposição, isto é, saber quando uma sentença é verdadeira ou falsa.

3. *Escreva a tabela verdade de cada operador lógico.*
* Tabela verdade and (&&)
   * P | Q | and   
   * v | v | v
   * v | f | f
   * f | v | f
   * f | f | f

* Tabela verdade or (||)
   * P | Q | or   
   * v | v | v
   * v | f | v
   * f | v | v
   * f | f | f

* Tabela verdade not (!)
   * P | Q | and   
   * v |   | f
   * f |   | v

4. *Quais os operadores aritméticos equivalentes aos lógicos?*
* and é a multiplicação, e or é a soma.

5. *Das palavras abaixo, informe os sinônimos dos operadores “e” e “ou”:*
* *Ambos* E
* *Qualquer* OU
* *Tanto quanto* E
* *Apenas* OU

6. *O que é um curto circuito?*
* Curto-circuito é o local em que uma expressão para de ser avaliada assim que seu resultado é determinado. Então, por exemplo: if (a == b || c == d || e == f), avaliando que o a é verdadeiro ele não precisa avaliar o restante da equção, pois a tabela do ou diz que se um é verdadeiro a expressão será verdadeira.

7. *A negação do sinal de maior é apenas mudá-lo para menor? Justifique.*
* Não, a negação do sinal de maior será <=, pois o inverso de o número não ser maior que 'tal' é que ele pode ser menor ou igual a 'tal'  .

8. *Escreva a negação das sentenças abaixo, usando a forma negativa e a forma de substituição de operadores. Troque and e or quando aparecerem.*

* *(Nome == ‘Artur’) and (Idade != 23)* --> (Nome != 'Arthur') ||! (Idade == 23)
* *(Inicio < 5) or (Inicio > 10)* --> (Inicio >= 5) &&! (Inicio<= 10)
* *(EstadoCivil==‘S’) and (Idade > 18) or ((Letra >= ‘A’) and (Letra `<=` ‘E’))*   --> (EStadoCivil != 'S') ||! (Idade <= 18) &&! ((Letra < 'A') ||! (Letra > 'E'))
* *!(aluno1 == ‘feliz’ or aluno2 == ‘feliz’)* --> (aluno1 == 'feliz' &&! aluno2 == 'feliz')

9. *A negação da proposição “Todo professor de matemática usa óculos” é:*
* *Nenhum professor de matemática usa óculos.*
* *Ninguém que usa óculos é professor de matemática.*
* *Todos os professores de Matemática não usam óculos.*
* *Existe alguém que usa óculos e não é professor de matemática.*
* *Existe algum professor de matemática que não usa óculos.*  (V)

10. *Escreva a negação das expressões abaixo, aplicando antônimos nos substantivos ou adjetivos.*
* *Somos uma turma comunista, portanto o professor é o nosso supremo marechal e nos manda o que fazer.*
  * Não somos uma turma comunista, portanto o professor é nosso amigo e nos indica o que fazer.
* *O jovem passeava tranquilamente pelo parque carregando seu violino para a suave sinfonia.*
 * O jovem não passeava assutado pelo paruqe carregando seu violino para a suave sinfonia.
* *Antes de escovar os dentes sempre usava o fio dental, mesmo assim ficaram amarelados.*
  * Antes de escovar os dentes nuca usava fio dental, mesmo assim meus dentes ficaram amarelados.

11. *Com base no conceito da negação, escreva o masculino ou o feminino dos nomes*
* *Flávia* --> Flávio.
* *André* -->Andréa.
* *Júlio* --> Júlia.
* *Sandra* --> Sandro.
* *Carlos* --> Carla.
* *Maria* --> Mario.
* *Felipe* --> Felipa.
* *Beatriz* --> Beatrizo


#########SELEÇÃO ENCADEADA ##########

#MUITAS CONDIÇÕES -> AÇÃO OU BLOCO;
##Quando não há padrão lógico em uma estrutura de seleção encadeada -> Seleção Encadeada Heterogênea
'''Estrutura Básica:
se <condicao>
    entao
        se
            entao
                inicio // inicio do BLOCO VERDADE
                    C1;
                    C2; // sequência de COMANDOS
                    .
                    .
                    Cn;
                fim;     //FIM do Bloco Verdade z
            fimse
'''

## Algoritmo 01: Média Aritmética com Aprovação E REPROVAÇÃO
n1 = float(input("Digite a nota do aluno referente ao 1° Bimestre:"));
n2 = float(input("Digite a nota do aluno referente ao 2° Bimestre:"));
n3 = float(input("Digite a nota do aluno referente ao 3° Bimestre:"));
n4 = float(input("Digite a nota do aluno referente ao 4° Bimestre:"));
mat = (n1 + n2 + n3 + n4) / 4;
if mat >= 6:
    print("Aluno Aprovado!")
else:
    print("Aluno Reprovado!")
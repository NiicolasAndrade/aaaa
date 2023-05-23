import java.util.Scanner;

public class Calculadora {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double salarioMensal, num1, num2, resultado;
        char operador;
        char escolha;

        System.out.print("Escolha uma opção:\n1. Calculadora básica\n2. Calculadora financeira\nOpção: ");
        escolha = scanner.next().charAt(0);

        switch (escolha) {
            case '1':
                System.out.print("Digite o primeiro número: ");
                num1 = scanner.nextDouble();

                System.out.print("Digite o segundo número: ");
                num2 = scanner.nextDouble();

                System.out.print("Digite o operador (+, -, *, /): ");
                operador = scanner.next().charAt(0);

                switch (operador) {
                    case '+':
                        resultado = num1 + num2;
                        System.out.println("Resultado: " + resultado);
                        break;
                    case '-':
                        resultado = num1 - num2;
                        System.out.println("Resultado: " + resultado);
                        break;
                    case '*':
                        resultado = num1 * num2;
                        System.out.println("Resultado: " + resultado);
                        break;
                    case '/':
                        if (num2 != 0) {
                            resultado = num1 / num2;
                            System.out.println("Resultado: " + resultado);
                        } else {
                            System.out.println("Não é possível dividir por zero!");
                        }
                        break;
                    default:
                        System.out.println("Operador inválido!");
                        break;
                }
                break;
            case '2':
                System.out.print("Digite o valor mensal que você ganha: ");
                salarioMensal = scanner.nextDouble();

                double necessidadesBasicas = salarioMensal * 0.5;
                double poupancaEmergencia = salarioMensal * 0.1;
                double dividasPagamentos = salarioMensal * 0.1;
                double investimentosLongoPrazo = salarioMensal * 0.1;
                double educacaoDesenvolvimento = salarioMensal * 0.05;
                double lazerQualidadeVida = salarioMensal * 0.1;

                System.out.println("Necessidades básicas: R$" + necessidadesBasicas);
                System.out.println("Poupança de emergência: R$" + poupancaEmergencia);
                System.out.println("Dívidas e pagamentos: R$" + dividasPagamentos);
                System.out.println("Investimentos de longo prazo: R$" + investimentosLongoPrazo);
                System.out.println("Educação e desenvolvimento pessoal: R$" + educacaoDesenvolvimento);
                System.out.println("Lazer e qualidade de vida: R$" + lazerQualidadeVida);
                break;
            default:
                System.out.println("Opção inválida!");
                break;
        }
    }
}

import java.util.Random;
import java.util.Scanner;

public class JogoAdivinhacao {
    public static void main(String[] args) {
        Random random = new Random();
        int numberToGuess = random.nextInt(100) + 1;
        int attempts = 0;
        boolean guessed = false;

        System.out.println("Jogo de Adivinhação");
        System.out.println("Tente adivinhar um número entre 1 e 100.");

        Scanner scanner = new Scanner(System.in);

        while (!guessed) {
            System.out.print("Digite sua tentativa: ");
            int guess = scanner.nextInt();
            attempts++;

            if (guess == numberToGuess) {
                System.out.println("Parabéns! Você acertou o número em " + attempts + " tentativas.");
                guessed = true;
            } else if (guess < numberToGuess) {
                System.out.println("Tente um número maior.");
            } else {
                System.out.println("Tente um número menor.");
            }
        }

        scanner.close();
    }
}

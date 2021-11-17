import java.util.Arrays;
import java.util.Random;

public class CountingSort {
		
	static class Aluno {
		public String matricula;
		public String nome;
		public int creditos;
		
		public Aluno() {
			Random randomGenerator = new Random();
			matricula = "";
			for (int i = 1; i <= 9; i++) {
				matricula += (char) ('0' + randomGenerator.nextInt(10));
			}
			nome = "";
			nome += (char)('A' + randomGenerator.nextInt(26));
			for (int i = 2; i <= 8; i++) {
				nome += (char) ('a' + randomGenerator.nextInt(26));
			}
			creditos = randomGenerator.nextInt(121);
		}
	}

	public static void main(String[] args) {
		int n = 40;
		Aluno[] alunos = new Aluno[n];
		for (int i = 0; i < alunos.length; i++) {
			alunos[i] = new Aluno();
		}
		imprime(alunos);
		alunos = ordenaCreditos(alunos);
		imprime(alunos);
		// alunos = ordenaMatricula(alunos);
		// imprime(alunos);
		// alunos = ordenaNome(alunos);
		// imprime(alunos);
	}
	
	static Aluno[] ordenaCreditos (Aluno[] A) {
		Aluno[] B = new Aluno[A.length];
        int[] C = new int[120];

        Arrays.fill(C ,0);

        for (int j = 0; j < A.length; j++) {
            C[A[j].creditos] = C[A[j].creditos] + 1;
        }

        for (int i = 1; i < 120; i++) {
            C[i] = C[i] + C[i-1];
        }
        for (int j = 39; j >= 0; j--) {
            B[C[A[j].creditos]-1] = A[j];
            C[A[j].creditos] = C[A[j].creditos] -1;
        }
		// to do
		return B;
	}

	static Aluno[] ordenaMatricula (Aluno[] A) {
		return A;
	}

	static Aluno[] ordenaNome (Aluno[] A) {
		return A;
	}

	static void imprime (Aluno[] A) {
		for (int i = 0; i < A.length; i++) {
			System.out.printf("%-15s%-15s%10d\n", A[i].matricula, A[i].nome, A[i].creditos);
		}
		System.out.print("\n\n\n");
	}
}
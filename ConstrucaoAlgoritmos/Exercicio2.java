public class Exercicio2 {
	
	static int[] qtde;
		
	public static void main(String[] args) {
		int troco = 33;
		int[] padrao = {7, 17, 25};
		double inicio, fim, tempo;
		int q;

		inicio = System.currentTimeMillis();
		q = trocoDinamico(troco, padrao);
		fim = System.currentTimeMillis();
		tempo = fim - inicio;
		if (q == Integer.MAX_VALUE) {q = -1;}
		System.out.printf("%-15s%10s%10s\n", "Método", "Qtde", "Tempo");
		System.out.printf("%-15s%10d%10.2f\n\n", "Dinâmico", q, tempo);

		inicio = System.currentTimeMillis();
		qtde = new int[troco+1];
		for (int t = 0; t <= troco; t++) {
			qtde[t] = -1;
		}
		q = trocoMemoization(troco, padrao);
		fim = System.currentTimeMillis();
		tempo = fim - inicio;
		if (q == Integer.MAX_VALUE) {q = -1;}
		System.out.printf("%-15s%10s%10s\n", "Método", "Qtde", "Tempo");
		System.out.printf("%-15s%10d%10.2f\n\n", "Memoization", q, tempo);

		inicio = System.currentTimeMillis();
		q = trocoRecursivo(troco, padrao);
		fim = System.currentTimeMillis();
		tempo = fim - inicio;
		if (q == Integer.MAX_VALUE) {q = -1;}
		System.out.printf("%-15s%10s%10s\n", "Método", "Qtde", "Tempo");
		System.out.printf("%-15s%10d%10.2f\n\n", "Recursivo", q, tempo);
	}
	
	static int trocoRecursivo(int troco, int[] padrao) {
		if (troco != 0) {
			int qMin = Integer.MAX_VALUE;
			for (int i = 0; i < padrao.length; i++) {
				if (troco - padrao[i] >= 0) {
					int q = trocoRecursivo(troco - padrao[i], padrao) + 1;
					if (q < 0) {q = Integer.MAX_VALUE;}
					if (q < qMin) {qMin = q;}
				}
			}
			return qMin;
		}
		return 0;
	}

	static int trocoMemoization(int troco, int[] padrao) {
        int[] B = new int[troco + 1];
        if (B[troco] != 0) {
            return B[troco];
        } else {
            if (troco != 0) {
                int qMin = Integer.MAX_VALUE;
                for (int i = 0; i < padrao.length; i++) {
                    if (troco - padrao[i] >= 0) {
                        int q = trocoRecursivo(troco - padrao[i], padrao) + 1;
                        if (q < 0) {q = Integer.MAX_VALUE;}
                        if (q < qMin) {qMin = q;}
                    }
                }
                return qMin;
            }
        }
		return 0;
	}

	static int trocoDinamico(int troco, int[] padrao) {
		int[] q = new int[troco + 1];
		int[] c = new int[troco + 1];
		for (int t = 1; t <= troco; t++) {
			q[t] = Integer.MAX_VALUE;
			for (int p = 0; p < padrao.length; p++) {
				// to do
			}
		}
		// imprimeTroco(c, troco);
		System.out.println();
		return q[troco];
	}
	
	static void imprimeTroco(int[] c, int troco) {
		// to do
	}
	
}
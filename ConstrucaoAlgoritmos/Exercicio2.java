public class Exercicio2 {
	
	static int[] qtde;
		
	public static void main(String[] args) {
		int troco = 33;
		int[] padrao = {1, 7, 17, 25};
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
			qtde[t] = 0;
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
        if (qtde[troco] != 0) {
            return qtde[troco];
        } else {
            if (troco != 0) {
                int qMin = Integer.MAX_VALUE;
                for (int i = 0; i < padrao.length; i++) {
                    if (troco - padrao[i] >= 0) {
                        int q = trocoMemoization(troco - padrao[i], padrao) + 1;
                        if (q < 0) {q = Integer.MAX_VALUE;}
                        if (q < qMin) {qMin = q;}
                    }
                }
				qtde[troco] = qMin;
				return qMin;
            }
        }
		qtde[troco] = 0;
		return 0;
	}

	static int trocoDinamico(int troco, int[] padrao) {
		int[] q = new int[troco + 1];
		int[] c = new int[troco + 1];


		for (int t = 1; t < q.length; t++) {
			q[t] = Integer.MAX_VALUE;
			int menor = q[t];
			int moeda = 0;
			for (int p = 0; p < padrao.length; p++) {
				if(padrao[p] <= t) {
					int dif = q[t -padrao[p]] + 1;
					if (dif < 0) {
						dif = Integer.MAX_VALUE;
					}
					if(dif < menor) {
						menor = dif;
						moeda = padrao[p];
					}
				}
			}
			q[t] = menor;
			c[t] = moeda;
		}
		imprimeTroco(c, troco);
		System.out.println();
		return q[troco];
	}
	
	static void imprimeTroco(int[] c, int troco) {
		if (troco != 0) {
			int moeda = c[troco];
			System.out.println(moeda);
			imprimeTroco(c, troco - moeda);
		}
	}
	
}


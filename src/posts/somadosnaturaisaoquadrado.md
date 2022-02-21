---
fav: "Soma Dos n Primeiros Números Naturais ao Quadrado"
title: "Soma dos primeiros $n$ números naturais ao quadrado"
description: "Explicação e demostração da fórmula da soma dos primeiros $n$ números naturais ao quadrado"
author: Matheus Ramos
date: '18/02/2022'
---


**Lembrando do produto notável:**

$$(a+b)^3=a^3+3a^2b+3ab^2+b^3$$

**Façamos com $a=k$ e $b=1$**

$$(k+1)^3=k^3+3k^2+3k+1$$

**Dando valores para $k$**

$$ 2^3 = 1^3+3\cdot 1^2 +3\cdot 1 +1$$

$$ 3^3 = 2^3+3\cdot 2^2 +3\cdot 2 +1$$

$$ 4^3 = 3^3+3\cdot 3^2 +3\cdot 3 +1$$

$$  5^3 = 4^3+3\cdot 4^2 +3\cdot 4 +1$$

$$ 6^3 = 5^3+3\cdot 5^2 +3\cdot 5 +1$$

$$\vdots$$

$$ n^3 = (n-1)^3+3\cdot (n-1)^2 +3\cdot (n-1) +1$$

$$ (n+1)^3 = n^3+3\cdot n^2 +3\cdot n +1$$

**Somando todos esses termos, temos:**

$$ \cancel{2^3} = 1^3+3\cdot 1^2 +3\cdot 1 +1$$

$$ \cancel{3^3} = \cancel{2^3}+3\cdot 2^2 +3\cdot 2 +1$$

$$ \cancel{4^3} = \cancel{3^3}+3\cdot 3^2 +3\cdot 3 +1$$

$$ \cancel{5^3} = \cancel{4^3} +3\cdot 4^2 +3\cdot 4 +1$$

$$ \cancel{6^3} = \cancel{5^3} +3\cdot 5^2 +3\cdot 5 +1$$

$$\vdots$$

$$ \cancel{n^3} = \cancel{(n-1)^3} +3\cdot (n-1)^2 +3\cdot (n-1) +1$$

$$ (n+1)^3 = \cancel{n^3} +3\cdot n^2 +3\cdot n +1$$


**Para simplificar fazemos:**

$$S_q=1^2+2^2+3^2+\dots+n^2$$

**Usando a soma dos n números naturais:**

$$\frac{n\cdot(n+1)}{2} = 1+2+3+\dots+n $$

**Logo**

$$(n+1)^3=3 S_q+3\frac{n(n+1)}{2}+(n+1)$$

**Multiplicando por $2$ em ambos os lados:**

$$2(n+1)^3=6 S_q+3 n(n+1)+2(n+1)$$

**Isolando o $6 S_q$:**

$$6 S_q=2(n+1)^3 - 3n(n+1)-2(n+1)$$

**Colocando em evidência $(n+1)$ no lado direito da equação:**

$$6S_q=(n+1) \left[2\cdot(n+1)^2 - 2-3n \right]$$

**Lembrando do produto notável:**

$$(n+1)^2=n^2+2n+1$$

**Temos:**

$$6S_q=(n+1) [2(n^2+2n+1) - 2-3n] $$

$$6S_q=(n+1)[2n^2+4n+2 - 2-3n]$$

$$6S_q=(n+1)[2n^2+4n+\cancel{2} - \cancel{2}-3n]$$

**Com isso temos:**

$$6 S_q=(n+1) \left(2n^2+4n-3n \right)$$

$$6 S_q=(n+1) \left(2n^2+n \right)$$

$$6 S_q=(n+1) n(2n+1)$$

**Logo a soma dos $n$ primeiros números naturais ao quadrado:**

$$S_q=\frac{n\cdot(n+1)\cdot(2n+1)}{6}$$


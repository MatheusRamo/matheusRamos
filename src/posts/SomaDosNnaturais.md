---
title: "Soma dos $n$ primeiros números naturais ao quadrado"
description: "Explicação e demostração da formula dos $n$ primeiros números naturais ao quadrado"
author: Matheus Ramos
date: '18/02/2022'
---


Lembrando do produto notável:

$$(a+b)^3=a^3+3a^2b+3ab^2+b^3\tag{1}$$
Façamos com $a=k$ e $b=1$
$$(k+1)^3=k^3+3k^2+3k+1\tag{2}$$
Dando valores para $k$
$$k=1 \implies 2^3 = 1^3+3\cdot 1^2 +3\cdot 1 +1$$
$$k=2 \implies 3^3 = 2^3+3\cdot 2^2 +3\cdot 2 +1$$
$$k=3 \implies 4^3 = 3^3+3\cdot 3^2 +3\cdot 3 +1$$
$$k=4 \implies 5^3 = 4^3+3\cdot 4^2 +3\cdot 4 +1$$
$$k=5 \implies 6^3 = 5^3+3\cdot 5^2 +3\cdot 5 +1$$
$$\vdots$$
$$k=(n-1) \implies n^3 = (n-1)^3+3\cdot (n-1)^2 +3\cdot (n-1) +1$$
$$k=n \implies (n+1)^3 = n^3+3\cdot n^2 +3\cdot n +1$$

Somando todos esses termos, temos:
$$ \cancel{2^3} = 1^3+3\cdot 1^2 +3\cdot 1 +1$$
$$ \cancel{3^3} = \cancel{2^3}+3\cdot 2^2 +3\cdot 2 +1$$
$$ \cancel{4^3} = \cancel{3^3}+3\cdot 3^2 +3\cdot 3 +1$$
$$ \cancel{5^3} = \cancel{4^3} +3\cdot 4^2 +3\cdot 4 +1$$
$$ \cancel{6^3} = \cancel{5^3} +3\cdot 5^2 +3\cdot 5 +1$$
$$\vdots$$
$$ \cancel{n^3} = \cancel{(n-1)^3} +3\cdot (n-1)^2 +3\cdot (n-1) +1$$
$$ (n+1)^3 = \cancel{n^3} +3\cdot n^2 +3\cdot n +1$$


Para simplificar fazemos:
$$S_q=1^2+2^2+3^2+\dots+n^2\tag{3}$$
Usando a [[soma dos n números naturais]]:
$$\frac{n\cdot(n+1)}{2} = 1+2+3+\dots+n \tag{4}$$
Logo
$$(n+1)^3=3\cdot S_q+3\cdot\frac{n\cdot(n+1)}{2}+(n+1)\tag{5}$$
Multiplicando por $2$ em ambos os lados:
$$2\cdot(n+1)^3=6\cdot S_q+3 n\cdot(n+1)+2\cdot(n+1)\tag{6}$$
Isolando o $6\cdot S_q$:
$$6\cdot S_q=2\cdot(n+1)^3 - 3n\cdot(n+1)-2\cdot(n+1)\tag{7}$$
Colocando em evidência $(n+1)$ no lado direito da equação:

$$6\cdot S_q=(n+1)\cdot \left[2\cdot(n+1)^2 - 2-3n \right]\tag{8}$$

Lembrando do produto notável:

$$(n+1)^2=n^2+2n+1\tag{9}$$
Temos:
$$6\cdot S_q=(n+1)\cdot \left[2\cdot(n^2+2n+1) - 2-3n \right]\tag{10}$$

$$6\cdot S_q=(n+1)\cdot \left[2n^2+4n+2 - 2-3n \right]\tag{11}$$
$$6\cdot S_q=(n+1)\cdot \left[2n^2+4n+\cancel{2} - \cancel{2}-3n \right]\tag{12}$$
Com isso temos:
$$6\cdot S_q=(n+1)\cdot \left(2n^2+4n-3n \right)\tag{13}$$
$$6\cdot S_q=(n+1)\cdot \left(2n^2+n \right)\tag{14}$$
$$6\cdot S_q=(n+1)\cdot n\cdot(2n+1) \tag{15}$$
Logo a soma dos $n$ primeiros números naturais ao quadrado:
$$S_q=\frac{n\cdot(n+1)\cdot(2n+1)}{6}\tag{16}$$


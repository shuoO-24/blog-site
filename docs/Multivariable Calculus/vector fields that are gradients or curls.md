---
id: vectorfield
title: Vector Field
---
## Vector fields that are gradients or curls

> 1.  [vector fields that are gradients](http://www.math.toronto.edu/courses/mat237y1/20189/notes/Chapter5/S5.7.html#sect-5.7.1)
> 2.  [vector fields that are curls](http://www.math.toronto.edu/courses/mat237y1/20189/notes/Chapter5/S5.7.html#sect-5.7.2)
> 3.  [Problems](http://www.math.toronto.edu/courses/mat237y1/20189/notes/Chapter5/S5.7.html#sect-5.7.P)

<iframe src="https://drive.google.com/file/d/1JqVTmSTIgPtSXHRd3LblF-Owid9UlAD6/preview" width="90%" height="700"></iframe>

Given a function f or a vector field F, we can easily compute grad⁡f or curl⁡F. Here we ask a sort of inverse question. Given a vector field G, can we determine:

-   does there exist some function f such that G\=grad⁡f? If so, can we find f?
-   does there exist some vector field F such that G\=curl⁡F? If so, can we find F?

We will discuss gradients first.

## vector fields that are gradients

**Theorem 1.** Let U be an open subset of Rn for n≥2, and let G:U→Rn be a continuous vector field. Then the following are equivalent:

**(i)** There exists a function f:U→R of class C1 such that G\=∇f.

**(ii)** ∫CG⋅dx\=0 for any closed piecewise smooth oriented curve C in U.

**(iii)** ∫C1G⋅dx\=∫C2G⋅dx for any two piecewise smooth oriented curves C1,C2 in U that both start at the same point p∈U and end at the same point q∈U.

A continuous vector field G:U→Rn is said to be **conservative** if any one of these conditions is satisfied (and hence all three of them are satisfied).

The starting point of the proof is the fact that if G\=∇f for some f of class C1, then for any oriented curve C that starts at a point p and ends at a point q,

(1)∫CG⋅dx\=∫C∇f⋅dx\=f(q)−f(p).

(We saw this in [Section 5.1](http://www.math.toronto.edu/courses/mat237y1/20189/notes/Chapter5/S5.1.html#sect-5.1.3), where we called it the **Fundamental Theorem of Line Integrals**.

**(i) ⇒ (ii)**. Assume that G\=∇f for some C1 function f. Then since a closed curve is just a curve that starts and ends at the same point p, it follows from (1) that the integral of G\=∇f over a closed curve equals f(p)−f(p)\=0.

**(ii) ⇒ (iii)**. _(sketch)_ Let C1,C2 be two peicewise smooth curves in U that both start at the same point p∈U and end at the same point q∈U.

Given these, we may define a piecewise smooth closed curve C to be the curve formed by

-   following C1 from p to q, then
-   following C2 backwards, from q to p,

thereby starting and ending at p. Then

∫CG⋅dx\=∫C1G⋅dx−∫C2G⋅dx

and it follows from this that if **(2)** holds, then ∫C1G⋅dx−∫C2G⋅dx\=0 for all C1,C2 as above, _i.e._ **(3)** holds. Filling in some of the details we have glossed over is an exercise.

**(iii) ⇒ (i)**. This is the hardest and most interesting part of the theorem. Suppose that G is a vector field that satisfies condition **(3)**. If this function f exists, it _must_ satisfy (1). Thus we can try to use formula (1) to reconstruct f (if it exists) from G. That is, we can fix some p∈U, and we can look for f such that G\=∇f and f(p)\=0. According to (1), such a function f must satisfy

(2)f(q)\=∫Cp,qG⋅dx for any curve Cp,q starting at p and ending at q.

Thus, given G satisfying condition **(3)**, we use equation (2) to _define_ f:U→R, and then verify that ∇f\=G. Condition **(3)** implies that the definition of f makes sense (that is, is independent of the choice of path Cp,q connecting p to q). Thus the proof of the theorem is completed by... the proof that this function f satisfies ∇f\=G. (sketch)

Let f be the function defined in (2). We first claim that for any q∈U, any vector v, and any h∈R such that the line segment from q to q+hv is contained in U,

(3)f(q+hv)\=f(q)+∫0hG(q+tv)⋅vdt.

To see that this is true, fix some curve Cp,q that starts at p and ends at q. Let ℓq,q+hv be the line segment that starts at q and ends at q+hv, and let Cp,q+hv be the curve obtained by

-   first following Cp,q from p to q;
-   then following ℓq,q+hv from q to q+hv.

Thus Cp,q+hv is a piecewise smooth curve that starts at p and ends at q+hv. It follows from (2) that

f(q+hv)\=∫Cp,q+hvG⋅dx\=∫Cp,qG⋅dx+∫ℓq,q+hvG⋅dx\=f(q)+∫ℓq,q+hvG⋅dx

If we express the line integral over ℓq,q+hv in terms of the parametrization g(t)\=q+tv, 0≤t≤h, this reduces to (3).

Next, for any j∈{1,…,n}, if (as usual) ej denotes the unit vector in the jth coordinate direction, then it follows from (3) that

∂f∂xj(q)\=limh→0f(q+hej)−f(q)h\=limh→01h∫0hG(q+tej)⋅ejdt\=limh→01h∫0hGj(q+tej)dt.

It is then an exercise to prove (using our assumption that G is continuous) then the limit exists and equals Gj(q). Since j is arbitrary, this proves that ∇f(q)\=G(q). ◻

One drawback of **Theorem 1** is that, given a vector field G, it might be hard to check whether it satisfies condition **(2)** or **(3)**. In order to do this, one would need to evaluate line integrals of G over every possible closed curve (for **(2)**) or pair of curves that start and end at the same point (for **(3)**). However, in 3 dimensions, and if G is C1, there is sometimes a much easier way to check whether it is conservative:

**Theorem 2.** If G is a conservative vector field of class C1 on an open set U⊂R3, then curl⁡G\=0.  
If U is convex, then the converse is true: if G:U→R3 is a C1 vector field and curl⁡G\=0, then G is conservative.  
However, on some non-convex sets, there exist **non-conservative** vector fields G that satisfy curl⁡G\=0.

(This is a special case of a much more general theorem that we will neither state nor discuss.)

**Sketch of proof.**

We already know that if G\=grad⁡f, then curl⁡G\=curl⁡grad⁡f\=0.

For the converse, assume that G is a C1 vector field on a convex set U⊂R3 such that curl⁡G\=0.

Fix p∈U, and for q∈U, let ℓp,q denote the line segment starting at p and ending at q. Since U is convex, this line segment is entirely contained in U.

We now define

f(q):=∫ℓp,qG⋅dx.

This is clearly well-defined, since we have specified exactly which path we follow to get from p to q, for every q.

In order to mimic the proof of Theorem 1, all we need is to be able to check that

(4)f(q+hv)\=f(q)+∫0hG(q+tv)⋅vdt.

holds. If we know this, then every other argument in the earlier proof can be repeated with no change.

To prove it, let's assume that p,q and q+hv are not colinear (in that case one can give a different, easier argument). Then they form the vertices of a triangle. Let's call the triangle S. For any choice of orientation (that is, of the direction n of the unit normal),

∬S(curl⁡G)⋅ndA\=0

since curl⁡G\=0 by assumption. Thus Stokes' Theorem implies that

∫∂SG⋅dx\=0

for any choice of the orientation of ∂S. Note however that ∂S consists of the three line segments connecting p to q to q+hv, and back to p. If it is oriented in that order (p to q to q+hv to p), then

0\=∫∂SG⋅dx \= ∫ℓp,qG⋅dx+∫ℓq,q+hvG⋅dx+∫ℓq+hv,pG⋅dx\=f(q)+∫0hG(q+tv)⋅vdt−f(q+hv).

We obtain (4) by rearranging this. ◻

An example of a non-conservative vector field G on a convex set that satisfies curl⁡G\=0 can be found in the exercises.

### For conservative G, how to find f such that ∇f\=G?

Now suppose G is a continuous vector field on an open set U⊂Rn, and that we somehow know that G is conservative. How can we find f such that ∇f\=G?

**One method** is simply to carry out a concrete version of the abstract proof, sketched above, that uses formula (2) to demonstrate of the existence of f. This works particularly well if U is a rectangle. Then given p\=(a,b,c) and q\=(x,y,z), we can always join p to q as follows:

1.  Change the first component from a to x, holding the other two components fixed. This straight-line path is parametrized by
    
    (t,b,c),t moves from a to x.
    
2.  Next change the second component from b to y, holding the other two components fixed. Since the first component has already been changed to x, this straight-line path is parametrized by
    
    (x,t,c),t moves from b to y.
    
3.  Finally, change the third component from c to z, holding the other two components fixed. This straight-line path is parametrized by
    
    (x,y,t),t moves from c to z.
    

Let Cp,q be the piecewise linear curve obtained in this way. Then

∫Cp,qG⋅dx\=∫axG1(t,b,c)dt+∫byG2(x,t,c)dt+∫czG3(x,y,t)dt.

So one way to implement formula (2) is by: fix (a,b,c), and define

(5)f(x,y,z):=∫axG1(t,b,c)dt+∫byG2(x,t,c)dt+∫czG3(x,y,t)dt.

(Note, we could also change the components in a different order, if we prefer...)

The above theoretical considerations guarantee that if G is conservative, then f defined in this way must satisfy ∇f\=G.

**Example 1.** Let G:R3→R3 be defined by

G(x,y,z)\=(−ysin⁡xy,−xsin⁡xy+zcos⁡yz,ycos⁡yz).

One can check that curl⁡G\=0. Thus G is conservative. Let us try to find f such that ∇f\=G. We will simply use the above formula, with (a,b,c)\=(0,0,0). (We could choose any point, but (0,0,0) is convenient.)

Then

∫axG1(t,b,c)dt\=∫0x0dt\=0,

∫byG2(x,t,c)dt\=∫0y(−xsin⁡xt+0)dt\=cos⁡xt|t\=0t\=y\=cos⁡xy−1,

and

∫czG3(x,y,t)dt\=∫0zycos⁡ytdt\=sin⁡yt|t\=0z\=sin⁡yz.

By adding the contributions from these three terms, we conclude that

f(x,y,z)\=cos⁡xy+sin⁡yz−1 satisfies ∇f\=G.

It is easy to check that this is indeed the case. (The constant −1 appears because, in choosing p\=(0,0,0), we implicitly arranged that f(0,0,0)\=0, and −1 is the constant that makes this be the case. If we had chosen a different point p\=(a,b,c), then chances are that we would have gotten a different constant.

**Remark.** Note that in writing down a concrete implementation of (2), we could have chosen any curve from (a,b,c) to (x,y,z), such as (for example) a straight line. If the domain of G is a convex set containing the origin, then we can take (a,b,c)\=(0,0,0), and the straight line to (x,y,z)is parametrized by g(t)\=(tx,ty,tz) for 0≤t≤1. This leads to a the general formula

f(x,y,z)\=∫01G(tx,ty,tz)⋅(x,y,z)dt.

For example, for G(x,y,z)\=(−ysin⁡xy,−xsin⁡xy+zcos⁡yz,ycos⁡yz) as above, this becomes (after some computation)

f(x,y,z)\=∫01−2txysin⁡(t2xy)+2tyzcos⁡(t2yz)dt

This is easily evaluated by considering the two halves separately, and making th substitutions u\=t2xy in the first half and u\=t2yz in the second half.

## vector fields that are curls

There is a whole theory about vector fields G:U→R3 (for U an open subset of R3) with the property that G\=curl⁡F for some other vector field F of class C1. It is very much parallel to the theory of gradient (= conservative) vector fields. However, we considered it in less detail.

Some main facts are summarized in the following:

**Theorem 2.**

1.  If G:U→R3 is a vector field of class C1 and G\=curl⁡F for some vector field F:U→R3 of class C2, then div⁡G\=0.
    
2.  Suppose G is a C1 vector field in an open set U⊂R3 such that div⁡G\=0.  
    **a.**. If U is convex, then there exists a vector field F such that curl⁡F\=G.  
    **b.** However, if U is not convex, it may be the case that no such vector field exists.
    

**About the proof:**

**1.** We already know that div⁡curl⁡F\=0 for all F.

**2b.** Consider the vector field

G(x,y,z)\=(xr3,yr3,zr3), where  r\=x2+y2+z2.

This is an example showing that on a nonconvex set U (note that the domain of G is U\=R3∖{0}), there can exist vector fields with zero divergence that are not curls. Imdeed, you can check that div⁡G\=0 for this G. You can also check that if S:={(x,y,z)∈R3:x2+y2+z2\=1}, oriented with the unit normal pointing outward, then

∬SG⋅ndA\=4π.

whereas if G\=curl⁡F in U, then we would have ∬SG⋅ndA\=∬Scurl⁡F⋅ndA\=0. (See [Section 5.6](http://www.math.toronto.edu/courses/mat237y1/20189/notes/Chapter5/S5.6.html).)

**2a.** The way the proof works is illustrates below for a concrete example. After that we will discus the abstract proof.

**Example 2.** Let

G(x,y,z)\=(xe−x2z2−6x,5y+2z,z−ze−x2z2).

One can check that div⁡G\=0, and the domain of G is all of R3, which is convex. So it must be possible to write G as the curl of some vector field F.

It turns out (see Folland for a discussion) that in this situation, it is always possible to find F such that one of its components is zero everywhere. In this example, it turns out to be easiest to lok for F of the form F\=(F1,0,F3). (This can be discovered by trial and error.) Then the equation that we are trying to solve, curl⁡F\=G, can be written as three equations:

∂2F3\=G1\=xe−x2z2−6x∂3F1−∂1F3\=G2\=5y+2z−∂2F1\=G3\=z−ze−x2z2.

First we consider the first and third equations. For every fixed x,z, we may take the antiderivative with respect to the y variable to obtain

F3(x,y,z)\=∫(xe−x2z2−6x)dy\=y(xe−x2z2−6x)+ϕ3(x,z),F1(x,y,z)\=−∫(z−ze−x2z2)dy\=y(ze−x2z2−z)+ϕ1(x,z),

where ϕ1(x,z) and ϕ3(x,z) are constants of integration, which are written in that way because they may depend on x and z. Substituting these into the second equation and simplifying, we obtain

5y+2z\=G2\=∂3F1−∂1F3\=∂3ϕ1−∂1ϕ3+y(e−x2z2−1)−2yx2z2e−x2z2−\[y(e−x2z2−6)−2yx2z2e−x2z2\].

After a lot of cancellation, this reduces to

∂3ϕ1−∂1ϕ3\=2z

and we can see by inspection that ths is solved for example by ϕ1(x,z)\=0,ϕ3(x,z)\=−2xz. We conclude that curl⁡F\=G for

F(x,y,z)\=(yze−x2z2−yz, 0, yxe−x2z2−6xy−2xz).

**Proof of part 2a of Theorem 2**

We will just follow the same procedure as in Example 2. We will also cheat a little cheat by proving the theorem not for an arbitrary convex set, but instead under the assumption that U is a rectangle, _e.g._ (a1,b1)×(a2,b2)×(a3,b3).

We assume that G is C1 in U and that div⁡G\=0. We want to find F solving the system of equations

∂2F3−∂3F2\=G1∂3F1−∂1F3\=G2∂1F2−∂2F1\=G3.

We will look for F such that F3\=0. Then the first two equations reduce to

−∂3F2\=G1∂3F1\=G2.

We fix some a∈(a3,b3) and integrate both sides with respect to the third variable (calling it t instead of z for purposes of integration) getting constants of integration that depend on x and y:

F2(x,y,z)\=−∫azG1(x,y,t)dt+ϕ(x,y)F1(x,y,z)\=∫azG2(x,y,t)dt+ψ(x,y).

We now substitute these into the third equation, differentiate under the integral sign, then simplify using the fact that div⁡G\=0:

G3(x,y,z)\=∂1F2−∂2F1\=∂1ϕ−∂2ψ−∫az(∂1G1+∂2G2)(x,y,t)dt\=∂1ϕ−∂2ψ+∫az∂3G3(x,y,t) dt\=∂1ϕ−∂2ψ+G3(x,y,z)−G3(x,y,a).

Thus the equation reduces to

∂1ϕ(x,y)−∂2ψ(x,y)\=G3(x,y,a).

and this can be solves for example by fixing a′∈(a1,b1) and setting

ψ(x,y)\=0,ϕ(x,y)\=∫a′xG3(t,y,a)dt .

**Example 3.** This is optional but interesting.

Assume that R⊂R2 is a regular region with piecewise smooth boundary, contained in \[−a,a\]×\[−a,a\] for some positive number a<π, and let

S:={(x,y,ϕ(x,y):(x,y)∈R} for ϕ(x,y)\=ln⁡(cos⁡xcos⁡y).

Below, an image of a portion of the graph of ϕ. For a suitable choice of the region R, this is what S would look like.

![scherk](http://www.math.toronto.edu/courses/mat237y1/20189/notes/Chapter5/scherk2.png)

Also define

G(x,y,z)\=(−∂xϕ,−∂yϕ,1)1+|∇ϕ|2\=(tan⁡x,−tan⁡y,1)1+tan2⁡x+tan2⁡y

It is a fact that you can check, if you are unusually fond of differentiation, that ∇⋅G\=0, and hence that there exists some F such that G\=∇×F. It follows by Stokes Theorem that

∬SG⋅ndA\=∬S′G⋅ndA

for any other surface S′ with the same boundary as S.

It is easy to see that G⋅n\=1 on S (in fact G exactly equals n on S). As a result for any surface S′ as above,

area(S) \= ∬S1dA \= ∬SG⋅ndA \= ∬S′G⋅ndA.

Also, it is pretty clear that |G|\=1 everywhere, and hence that |G⋅n|≤|G||n|\=1 everywhere on S′. Therefore

∬S′G⋅ndA ≤ ∬S′|G⋅n|dA ≤ ∬S′1dA\=area(S′).

Putting these together, we conclude that

area(S)≤area(S′) for any surface S′ such that ∂S\=∂S′.

This shows that the particular surface S pictured above is an example of what is called a **minimal surface**: a surface that has the smallest possible area, among all surfaces with a given boundary.

## Problems

### Basic skills

1.  Given a vector field G:R3→R3, determine whether whether there exists any functions f such that ∇f\=G, and if so, find one. For example:
    
    -   G(x,y,z)\=(ez1+y2,−2xyez(1+y2)2,xez1+y2+sin⁡z).
        
    -   G(x,y,z)\=(yz,xz,xy).
        
    -   G(x,y,z)\=(xsin⁡ycos⁡z,12x2cos⁡ycos⁡z,−12x2sin⁡ysin⁡z).
        
    -   G(x,y,z)\=(12,y2−xzy2z,−yz2).
        
    -   G(x,y,z)\=(cos⁡zx,cos⁡zy,−sin⁡zln⁡(xyz)+cos⁡zz), for x,y,z all positive.
        
    -   G is a vector field of the form G(x,y,z)\=(f(x),g(y),h(z)), where f,g,h are all continuous functions of a single variable.
        
2.  Given a vector field G:R3→R3, determine whether there exist any vector fields F such that ∇×F\=G, and if so find one. For example:
    
    -   G(x,y,z)\=(x,y,z).
        
    -   G(x,y,z)\=(−y,x,0).
        
    -   G(x,y,z)\=(y,1zcos⁡yz,1ycos⁡yx).
        
    -   G(x,y,z)\=(yz,xz,xy).
        
    -   G is a vector field of the form G(x,y,z)\=(f(y,z),g(x,z),h(x,y)), where f,g,h are all continuous functions of two variables.
        

### Other questions

1.  For U:={(x,y,z)∈R3:x2+y2\>0}, define G:U→R3 by
    
    G(x,y,z)\=(−yx2+y2,xx2+y2,0)
    
    .
    -   Prove that curl⁡G\=0.
    -   Prove that G is not conservative.  
        (**Hint**: Consider ∫CG⋅dx, where C is a circle around the z\-axis.))
    -   possibly challenging, and not really recommended : if we define U′:={(x,y,z)∈R3:x\>0}, then we know that G is conservative on U′. (why?) Find f such that ∇f\=G on U′.
2.  Prove that if g is a continuous function defined on an open set containing a point q, then for unit vector e,
    
    limh→01h∫0hg(q+te)dt\=g(q)
    
    (This point comes up in the proofs of Theorems 1 and 2).
3.  Assume that G is a C2 vector field that is **both a gradient and a curl**.
    
    -   Show that if f is a function such that ∇f\=G, then f is harmonic (that is, ∇2f\=0, where we recall that ∇2f\=∑i\=13∂2f∂xi2.)
        
    -   Conclude that each component Gi of G is also harmonic.
        
    
    [⇐](http://www.math.toronto.edu/courses/mat237y1/20189/notes/Chapter5/S5.6.html)  [⇑](http://www.math.toronto.edu/courses/mat237y1/20189/notes/Contents.html)  [⇒](http://www.math.toronto.edu/courses/mat237y1/20189/notes/Chapter6/6.1.html)





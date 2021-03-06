Quantum Properties
===================

|   

Let's learn a little about the underlying physics behind creating and running algorithms on the Composer. Quantum computing has the potential to revolutionize how we process information, opening the door to new types of computing and communication. To do this, quantum computers rely on two fundamental properties of the quantum world: **superposition** and **entanglement.**

| 


.. cssclass:: h3

Superposition

What is **superposition**? Quantum bits can be in the “:math:`|0\rangle`”
state (called a zero-ket), the “:math:`|1\rangle`” state (called the
one-ket), or a linear combination of the two (superposition). The
half-angle bracket notation :math:`|\rangle` is conventionally used to
indicate qubits, as opposed to ordinary bits. When you measure the
:math:`|0\rangle` quantum state, you get a classical 0, and when you
measure the :math:`|1\rangle` quantum state, you get a classical 1. The
:math:`|0\rangle` state is sometimes called the ground state because in
many physical implementations of quantum computing, including ours, it
is the lowest energy state.

| 

.. cssclass:: h3

Entanglement

**Entanglement** is a property of many quantum
superpositions and does not have a classical analog. In an entangled
state, the whole system can be described definitively, even though the
parts cannot. Observing one of two entangled qubits causes it to behave
randomly, but tells the observer exactly how the other qubit would act
if observed in a similar manner. Entanglement involves a correlation
between individually random behaviors of the two qubits, so it cannot be
used to send a message. Some people call it “instantaneous action at a
distance,” but this is a misnomer. There is no **action,** but rather
**correlation**; the correlation between the two qubits’ outcomes is
detected only after the two measurements when the observations are
compared. The ability of quantum computers to exist in entangled states
is responsible for much of their extra computing power, as well as many
other feats of quantum information processing that cannot be performed,
or even described, classically.

| 

Superposition and entanglement are fundamental to how quantum computing works. 
The rest of this guide will cover how to create superpositions and 
entangled states using IBM Q's Quantum Composer, and what we can do with them.

| 

---
id: rng-explain
sidebar_label: GINAR Protocol
title: GINAR Protocol
---

The **GINAR protocol**, done via the private blockchain integration or via the HTTP API, should operates in two phases, **Initialize** and **Process**.

**Initialize Phase**: In this phase, a client in need of random numbers sends a request to the GINAR Service to initialize a new session, each session only lasts in a pre-specified interval of time. The GINAR Service authenticates the initialization request from the client. If it is valid, a genesis session key S0 will be established. This session key is then used to determine tickets for generating random numbers.

After the session key is established, the protocol proceeds to the Process phase. When the session key expires, if the client wants to request more numbers, the protocol proceeds to the **Initialize phase** to establish a new session.

**Process Phase**: This phase consists of 4 steps

- **Step 1 - Create Ticket**:  A new ticket is created using a formula. After ticket created, it is broadcasted to all nodes in the Core Layer.

- **Step 2 - Select Eligible Nodes**: Each node in the Core Layer checks whether it is eligible to take part in the generation process for a ticket. If no node is eligible, the ticket will be updated and go back to step 1.

- **Step 3 - Make Contribution**: Each eligible node chooses a number to contribute, computes the hash of this number and publishes the hash onto the blockchain. The node generates a string called **Proof-of-Designation (PoD)** to be a proof of the value it contributes. Next, the eligible node then sends the number along with the corresponding PoD to the GINAR Service.

- **Step 4 - Calculate the Final Outcome**: After receiving messages from eligible nodes, the GINAR Service first verifies the correctness of each PoD. If all PoDs are valid, the final result is then computed for the contributed numbers. This result is the final outcome and will be sent back to client.

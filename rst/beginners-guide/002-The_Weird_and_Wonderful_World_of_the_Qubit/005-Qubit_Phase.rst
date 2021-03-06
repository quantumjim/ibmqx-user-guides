Qubit Phase
===========

|

Now that we have seen how to make :math:`|0\rangle`, :math:`|1\rangle`, 
and superposition states, let’s investigate how we can change the 
**phase** of the superposition. To do so, we have added the following gates: :math:`Z`, 
:math:`S`, :math:`S^{\dagger}`, :math:`T`, and :math:`T^{\dagger}`.

|

|image0|

|

These gates can be understood as rotations around the Z axis:

- The :math:`Z` gate is a :math:`\pi` rotation around the Z axis 
- The :math:`S` gate is a rotation of :math:`\pi/2` around Z axis
- The :math:`T` gate is a :math:`\pi/4` rotation around Z axis
- :math:`S^{\dagger}` is the inverse of :math:`S` (does a :math:`-\pi/2` around Z, and :math:`SS^{\dagger}` returns the original state) 
- :math:`T^{\dagger}` is the inverse of :math:`T` 

These rotations give the qubit a component along the Y direction of the Bloch sphere, 
which is a representation of the complex information in the qubit state. Applying a 
Z gate to a qubit in the :math:`|0\rangle` state doesn't appear to affect the qubit, 
as can be seen in the Bloch diagram below.
 
|

| **Applying a Z gate to a qubit in |0> state (Bloch Sphere and Circuit Diagram)**

  
|image1|

|


.. raw:: html

   <a href="https://quantumexperience.ng.bluemix.net/qx/editor?codeId=95d0c305399b7db58c1c6189b6a333e5&sharedCode=true" target="_parent"><img src="https://dal.objectstorage.open.softlayer.com/v1/AUTH_42263efc45184c7ca4742512588a1942/codes/code-86e01da97076b98d2319178fd24446ef.png" style="width: 100%; max-width: 600px;"></a>
   <a href="https://quantumexperience.ng.bluemix.net/qx/editor?codeId=95d0c305399b7db58c1c6189b6a333e5&sharedCode=true" target="_blank" style="text-align: right; display: block;">Open in composer</a>

|

|

When the qubit is in the \|0> state, Z doesn’t seem to do much. But when the
qubit is in the :math:`|+\rangle` state, you can see that Z flips the
state from :math:`|+\rangle` to :math:`|-\rangle`.

|

| **Applying a Z gate to a qubit in |+> state (Bloch Sphere and Circuit Diagram)**


|image3|

| 

.. raw:: html

   <a href="https://quantumexperience.ng.bluemix.net/qx/editor?codeId=95d0c305399b7db58c1c6189b6c3e493&sharedCode=true" target="_parent"><img src="https://dal.objectstorage.open.softlayer.com/v1/AUTH_42263efc45184c7ca4742512588a1942/codes/code-075df8e2dacac4fa2f76486ecc87db3e.png" style="width: 100%; max-width: 600px;"></a>
   <a href="https://quantumexperience.ng.bluemix.net/qx/editor?codeId=95d0c305399b7db58c1c6189b6c3e493&sharedCode=true" target="_blank" style="text-align: right; display: block;">Open in composer</a>

|

|

Let’s now examine intermediate rotations around the Z axis, starting in
the :math:`|+\rangle` superposition state. Below is a summary of how
different rotations around the Z axis impact measurements in the
superposition basis.

|

|image5|

| 

|image6|


|

.. |image0| image:: data:image/png;base64,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
.. |image1| image:: https://dal.objectstorage.open.softlayer.com/v1/AUTH_039c3bf6e6e54d76b8e66152e2f87877/images-classroom/blocksphere-4-3-1o7ta37ydp0dg3nmi.png
.. |image2| image:: https://dal.objectstorage.open.softlayer.com/v1/AUTH_039c3bf6e6e54d76b8e66152e2f87877/images-classroom/1q-zgatea0jijtigyn6zuxr.png
.. |image3| image:: https://dal.objectstorage.open.softlayer.com/v1/AUTH_039c3bf6e6e54d76b8e66152e2f87877/images-classroom/h-z-gatepk7ti2a9u9emte29.png
.. |image4| image:: https://dal.objectstorage.open.softlayer.com/v1/AUTH_039c3bf6e6e54d76b8e66152e2f87877/images-classroom/1q-h-zgatesrsew5sgr0pg8ehfr.png
.. |image5| image:: https://dal.objectstorage.open.softlayer.com/v1/AUTH_039c3bf6e6e54d76b8e66152e2f87877/images-classroom/4-163ijhyer00ktn8kt9.png
.. |image6| image:: https://dal.objectstorage.open.softlayer.com/v1/AUTH_039c3bf6e6e54d76b8e66152e2f87877/images-classroom/rotation-tabletkaljcjy6869a4i.png


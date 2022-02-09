# %% imports
import matplotlib.pyplot as plt
import numpy as np
from dtw import dtw, rabinerJuangStepPattern

# region --- Example from the docs:

# %% A noisy sine wave as query
idx = np.linspace(0, 6.28, num=100)
query = np.sin(idx) + np.random.uniform(size=100)/10.0

# A cosine is for template; sin and cos are offset by 25 samples
template = np.cos(idx)

# %% Find the best match with the canonical recursion formula
alignment = dtw(query, template, keep_internals=True)

## Display the warping curve, i.e. the alignment curve
alignment.plot(type="threeway")

#%% Align and plot with the Rabiner-Juang type VI-c (no. 6) unsmoothed recursion
aligned = dtw(query, template, keep_internals=True, 
    step_pattern=rabinerJuangStepPattern(6, "c"))

aligned.plot(type="twoway",offset=-2)

#%% See the recursion relation, as formula and diagram
print(rabinerJuangStepPattern(6,"c"))
rabinerJuangStepPattern(6,"c").plot()
# endregion


# region -- testing dtw on puzzle borders 


# endregion
#!/usr/bin/python
import sys
import os
import glob

for filename in glob.glob('*cc.mp3'):
    # prefix= "synth/"
    newName = filename[:-6] + "c.mp3"
    os.rename(filename, newName)

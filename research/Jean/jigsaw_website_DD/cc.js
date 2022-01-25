function r(e) {
    var t = Gi.parms().reset();
    if (!s)
        return K.error("selected puzzle file is null"), void window.alert("The selected file could not be opened.");
    if (s.isJigsaw) {
        var n, i, o, r = !0;
        try { i = JSON.parse(e.target.result) } catch (e) {}
        if (
            i && i.info && "string" == typeof i.info && i.info.includes("Jigsaw Explorer") && 8 <= i.ver) return (o = Z.recordsManager.find(s.name)) || (i.nam = s.name, o = new Z.puzzleRecord(i, !0)), void(o.pid ? (0 === o.pid.indexOf("http") ? (t.url = o.pid, i.cred && (t.cred = i.cred),
            i.credu && (t.credu = i.credu)) : (t.saveName = s.name, t.puzzleId = o.pid), new Z.Puzzle(t)) : i.img ? (t.name = s.name,
            t.data = "data:image/jpeg;base64," + i.img, new Z.Puzzle(t)) : (U.setAuxData("Bad Record", o, !0), U.setAuxData("Old Record",
            JSON.stringify(i).substr(0, 1024) + "..."), K.fault(new Error("Record with no pid. file name=" + s.name)), L.msgbox(
            "The selected puzzle could not be opened. Please contact Support for help.")));
        try {
            n = function(e) {
                for (var t = e.split(
                        '"sgl":'), n = "", i = 0, o = 0, r = 0, s = t.length - 1; r < s; r++) n += t[r] + '"sgl' + i++ + '":';
                for (t = (n += t[s]).split('"grp":'), n = "", r = 0,
                    s = t.length - 1; r < s; r++) n += t[r] + '"grp' + o++ + '":';
                return n += t[s]
            }(e.target.result), n = JSON.parse(n)
        } catch (e) { r = !1 }
        r && n.puzzle && n.info && n.info.includes("Jigsaw Explorer") && n.puzzle.ver && 6 <= n.puzzle.ver ? ((o = Z.recordsManager.find(s.name)) || (n.ver = 6, n.nam = s.name, o = new Z.puzzleRecord(n)), o.pid ? (0 === o.pid.indexOf("http") ? (t.url = o.pid, t.saveName = s.name,
                n.puzzle.cred && (t.cred = n.puzzle.cred), n.puzzle.credu && (t.credu = n.puzzle.credu)) : (t.saveName = s.name, t.puzzleId = o.pid),
            new Z.Puzzle(t)) : n.puzzle.img ? (t.name = s.name, t.data = "data:image/jpeg;base64," + n.puzzle.img, new Z.Puzzle(t)) : (
            U.setAuxData("Bad Record", o, !0), U.setAuxData("Old Record", JSON.stringify(n).substr(0, 1024) + "..."), K.fault(new Error(
                "Record with no pid. file name=" + s.name)), L.msgbox(
                "The selected puzzle could not be opened. Please contact Support for help."))) : L.msgbox(
            "The selected jigsaw file is either not recognized or it is an outdated format. Contact Support for help.")
    } else L.busy(!0), a = e.target.result, t.name = s.name, t.data = a, K.log("create puzzle from file " + s.name), new Z.Puzzle(t)
}
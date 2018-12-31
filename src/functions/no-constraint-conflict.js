const LOWER = 0;
const UPPER = 1;

export default function noConstraintConflict(constraints) {
    const limits = {
        s: [-Infinity, Infinity],
        p: [-Infinity, Infinity],
        e: [-Infinity, Infinity],
        c: [-Infinity, Infinity],
        i: [-Infinity, Infinity],
        a: [-Infinity, Infinity],
        l: [-Infinity, Infinity],
    };
    if (constraints.length < 2) {
        return true;
    }
    for (let constraint of constraints) {
        if (constraint.from) {
            if (limits[constraint.property][UPPER] < constraint.from) {
                return false;
            }
            limits[constraint.property][LOWER] = constraint.from;
        }
        if (constraint.to) {
            if (limits[constraint.property][LOWER] > constraint.to) {
                return false;
            }
            limits[constraint.property][UPPER] = constraint.to;
        }
    }
    return true;
}
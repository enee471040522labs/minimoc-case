FeatureScript 3095;
import(path : "onshape/std/geometry.fs", version : "3095.0");

annotation { "Default Units" : ["cubicMillimeter", "degree", "degreePerSecond", "footPoundForce", "hertz", "inchPerSecondSquared", "inchPound", "millimeter", "pound", "poundForce", "poundPerCubicInch", "poundPerSquareInch", "second", "squareMillimeter"] }
export function main()
{
    return build({});
}

export function build()
{
    return buildPrivate({});
}

export function build(configuration is map)
{
    return buildPrivate(configuration);
}

const buildPrivate = definePartStudio(function(context is Context, configuration is map, lookup is function)
    precondition
    {
    }
    {
        const id is Id = newId();
        annotation { 'unused' : true }
        var features = {};
        features.F7jmyjHoKoPTEcM_0 = function(id)
            {
                annotation { 'unused' : true }
                var features = features;
                if (true)
                {
                    const initialGuessF7jmyjHoKoPTEcM_0 = { "GrnGX0c0h7Ll.bottom" : [0.017323761045932782, 0.0385, 1.0, 0.0, -0.07007376104593277, 0.03542623895406723], "GrnGX0c0h7Ll.top" : [0.0, -0.0385, 1.0, 0.0, -0.052750000000000005, 0.05274999999999999], "GrnGX0c0h7Ll.left" : [-0.05275, 0.0029262041449546776, -1.8369701987210297E-16, -1.0, -0.035573795855045325, 0.041426204144954674], "GrnGX0c0h7Ll.right" : [0.05275, 0.0029262041449546585, -1.8369701987210297E-16, -1.0, -0.03557379585504534, 0.04142620414495466], "GrnGX0c0h7Ll.middle" : [0.0, 0.0], "0fW99S3rySJR.bottom" : [-0.011924728278070682, 0.03235, 1.0, -6.123233995736767E-17, -0.033575271721929326, 0.059024728278070676], "0fW99S3rySJR.top" : [-0.01913709863387049, -0.032650000000000005, 1.0, -6.123233995736767E-17, -0.026362901366129524, 0.06623709863387048], "0fW99S3rySJR.left" : [-0.04550000000000001, -0.015294761366676525, -2.4492935982947064E-16, -1.0, -0.04764476136667652, 0.01735523863332348], "0fW99S3rySJR.right" : [0.04709999999999999, -0.015294761366676547, -2.4492935982947064E-16, -1.0, -0.04764476136667654, 0.017355238633323465], "0fW99S3rySJR.middle" : [7.999999999999917E-4, -1.5000000000000787E-4], "E1K4gf2SurWb" : [0.047099999999999996, 0.03234999999999999, 1.0, 0.0, 0.00275, -1.0], "WzKdtZ53KEn6" : [0.04709999999999999, -0.03265000000000001, 1.0, 0.0, 0.00275, -1.0], "VFM5uiyng2aG" : [-0.045500000000000006, 0.03235, 1.0, 0.0, 0.00275, -1.0], "yNI6JoUKGExw" : [-0.04550000000000001, -0.032650000000000005, 1.0, 0.0, 0.00275, -1.0] };
                    {
                    }
                    var zodkaXuIQpFOiH_query;
                    zodkaXuIQpFOiH_query=qCompressed(1.0,"%B5$QueryM4Sa$entityTypeBa$EntityTypeS4$FACESb$historyTypeS8$CREATIONSb$operationIdB2$IdA1S3.7$TopplaneOpS9$queryTypeS5$DUMMY",id);
                    annotation { "Feature Name" : "Base MiniMoc Footprint" }
                    var sketch = newSketch(context, id + "F7jmyjHoKoPTEcM_0", { "sketchPlane" : qUnion([zodkaXuIQpFOiH_query]), "disableImprinting" : false });
                    skLineSegment(sketch, "GrnGX0c0h7Ll.bottom", { "construction" : false, "index" : "1" });
                    skLineSegment(sketch, "GrnGX0c0h7Ll.top", { "construction" : false, "index" : "2" });
                    skLineSegment(sketch, "GrnGX0c0h7Ll.left", { "construction" : false, "index" : "3" });
                    skLineSegment(sketch, "GrnGX0c0h7Ll.right", { "construction" : false, "index" : "4" });
                    skPoint(sketch, "GrnGX0c0h7Ll.middle", { "construction" : true, "index" : "1" });
                    skLineSegment(sketch, "0fW99S3rySJR.bottom", { "construction" : true, "index" : "5" });
                    skLineSegment(sketch, "0fW99S3rySJR.top", { "construction" : true, "index" : "6" });
                    skLineSegment(sketch, "0fW99S3rySJR.left", { "construction" : true, "index" : "7" });
                    skLineSegment(sketch, "0fW99S3rySJR.right", { "construction" : true, "index" : "8" });
                    skPoint(sketch, "0fW99S3rySJR.middle", { "construction" : true, "index" : "2" });
                    skCircle(sketch, "E1K4gf2SurWb", { "construction" : false, "index" : "1" });
                    skCircle(sketch, "WzKdtZ53KEn6", { "construction" : false, "index" : "2" });
                    skCircle(sketch, "VFM5uiyng2aG", { "construction" : false, "index" : "3" });
                    skCircle(sketch, "yNI6JoUKGExw", { "construction" : false, "index" : "4" });
                    {
                        skConstraint(sketch, "GrnGX0c0h7Ll.mid1", { "constraintType" : ConstraintType.MIDPOINT, "index" : "1", "name" : "", "localMidpoint" : "GrnGX0c0h7Ll.middle", "localEntity1" : "GrnGX0c0h7Ll.top.start", "localEntity2" : "GrnGX0c0h7Ll.bottom.end" });
                    }
                    {
                        skConstraint(sketch, "GrnGX0c0h7Ll.mid2", { "constraintType" : ConstraintType.MIDPOINT, "index" : "2", "name" : "", "localMidpoint" : "GrnGX0c0h7Ll.middle", "localEntity1" : "GrnGX0c0h7Ll.top.end", "localEntity2" : "GrnGX0c0h7Ll.bottom.start" });
                    }
                    {
                        skConstraint(sketch, "GrnGX0c0h7Ll.perpendicular", { "constraintType" : ConstraintType.PERPENDICULAR, "index" : "1", "name" : "", "localFirst" : "GrnGX0c0h7Ll.top", "localSecond" : "GrnGX0c0h7Ll.left" });
                    }
                    {
                        skConstraint(sketch, "GrnGX0c0h7Ll.parallel.1", { "constraintType" : ConstraintType.PARALLEL, "index" : "1", "name" : "", "localFirst" : "GrnGX0c0h7Ll.bottom", "localSecond" : "GrnGX0c0h7Ll.top" });
                    }
                    {
                        skConstraint(sketch, "GrnGX0c0h7Ll.parallel.2", { "constraintType" : ConstraintType.PARALLEL, "index" : "2", "name" : "", "localFirst" : "GrnGX0c0h7Ll.left", "localSecond" : "GrnGX0c0h7Ll.right" });
                    }
                    {
                        skConstraint(sketch, "GrnGX0c0h7Ll.horizontal", { "constraintType" : ConstraintType.HORIZONTAL, "index" : "1", "name" : "", "localFirst" : "GrnGX0c0h7Ll.top" });
                    }
                    {
                        skConstraint(sketch, "GrnGX0c0h7Ll.corner0", { "constraintType" : ConstraintType.COINCIDENT, "index" : "1", "name" : "", "localFirst" : "GrnGX0c0h7Ll.bottom.start", "localSecond" : "GrnGX0c0h7Ll.left.start" });
                    }
                    {
                        skConstraint(sketch, "GrnGX0c0h7Ll.corner1", { "constraintType" : ConstraintType.COINCIDENT, "index" : "2", "name" : "", "localFirst" : "GrnGX0c0h7Ll.bottom.end", "localSecond" : "GrnGX0c0h7Ll.right.start" });
                    }
                    {
                        skConstraint(sketch, "GrnGX0c0h7Ll.corner2", { "constraintType" : ConstraintType.COINCIDENT, "index" : "3", "name" : "", "localFirst" : "GrnGX0c0h7Ll.top.start", "localSecond" : "GrnGX0c0h7Ll.left.end" });
                    }
                    {
                        skConstraint(sketch, "GrnGX0c0h7Ll.corner3", { "constraintType" : ConstraintType.COINCIDENT, "index" : "4", "name" : "", "localFirst" : "GrnGX0c0h7Ll.top.end", "localSecond" : "GrnGX0c0h7Ll.right.end" });
                    }
                    {
                        var HwmcPuwDqYJQay_query;
                        HwmcPuwDqYJQay_query=qCompressed(1.0,"%B5$QueryM4Sa$entityTypeBa$EntityTypeS6$VERTEXSb$historyTypeS8$CREATIONSb$operationIdB2$IdA1S6.7$OriginpointOpS9$queryTypeS5$DUMMY",id);
                        skConstraint(sketch, "GrnGX0c0h7Ll.middle.positionSnap0", { "constraintType" : ConstraintType.COINCIDENT, "index" : "5", "name" : "", "localFirst" : "GrnGX0c0h7Ll.middle", "externalSecond" : qUnion([HwmcPuwDqYJQay_query]) });
                    }
                    {
                        skConstraint(sketch, "8OQLx2W3UjS9", { "constraintType" : ConstraintType.DISTANCE, "index" : "1", "name" : "", "localFirst" : "GrnGX0c0h7Ll.left", "localSecond" : "GrnGX0c0h7Ll.right", "direction" : DimensionDirection.MINIMUM, "length" : { 'value' : try(105.5 * millimeter), 'expression' : "105.5 mm" }.value, "halfSpace0" : DimensionHalfSpace.LEFT, "halfSpace1" : DimensionHalfSpace.RIGHT, "labelRatio" : 0.5, "labelDistance" : -0.04576927423231114 * meter });
                    }
                    {
                        skConstraint(sketch, "TjQDViCvNrkk", { "constraintType" : ConstraintType.DISTANCE, "index" : "2", "name" : "", "localFirst" : "GrnGX0c0h7Ll.top", "localSecond" : "GrnGX0c0h7Ll.bottom", "direction" : DimensionDirection.MINIMUM, "length" : { 'value' : try(77 * millimeter), 'expression' : "77 mm" }.value, "halfSpace0" : DimensionHalfSpace.LEFT, "halfSpace1" : DimensionHalfSpace.RIGHT, "labelRatio" : 0.49132253949276417, "labelDistance" : -0.06586272884600877 * meter });
                    }
                    {
                        skConstraint(sketch, "0fW99S3rySJR.mid1", { "constraintType" : ConstraintType.MIDPOINT, "index" : "3", "name" : "", "localMidpoint" : "0fW99S3rySJR.middle", "localEntity1" : "0fW99S3rySJR.top.start", "localEntity2" : "0fW99S3rySJR.bottom.end" });
                    }
                    {
                        skConstraint(sketch, "0fW99S3rySJR.mid2", { "constraintType" : ConstraintType.MIDPOINT, "index" : "4", "name" : "", "localMidpoint" : "0fW99S3rySJR.middle", "localEntity1" : "0fW99S3rySJR.top.end", "localEntity2" : "0fW99S3rySJR.bottom.start" });
                    }
                    {
                        skConstraint(sketch, "0fW99S3rySJR.perpendicular", { "constraintType" : ConstraintType.PERPENDICULAR, "index" : "2", "name" : "", "localFirst" : "0fW99S3rySJR.top", "localSecond" : "0fW99S3rySJR.left" });
                    }
                    {
                        skConstraint(sketch, "0fW99S3rySJR.parallel.1", { "constraintType" : ConstraintType.PARALLEL, "index" : "3", "name" : "", "localFirst" : "0fW99S3rySJR.bottom", "localSecond" : "0fW99S3rySJR.top" });
                    }
                    {
                        skConstraint(sketch, "0fW99S3rySJR.parallel.2", { "constraintType" : ConstraintType.PARALLEL, "index" : "4", "name" : "", "localFirst" : "0fW99S3rySJR.left", "localSecond" : "0fW99S3rySJR.right" });
                    }
                    {
                        skConstraint(sketch, "0fW99S3rySJR.horizontal", { "constraintType" : ConstraintType.HORIZONTAL, "index" : "2", "name" : "", "localFirst" : "0fW99S3rySJR.top" });
                    }
                    {
                        skConstraint(sketch, "0fW99S3rySJR.corner0", { "constraintType" : ConstraintType.COINCIDENT, "index" : "6", "name" : "", "localFirst" : "0fW99S3rySJR.bottom.start", "localSecond" : "0fW99S3rySJR.left.start" });
                    }
                    {
                        skConstraint(sketch, "0fW99S3rySJR.corner1", { "constraintType" : ConstraintType.COINCIDENT, "index" : "7", "name" : "", "localFirst" : "0fW99S3rySJR.bottom.end", "localSecond" : "0fW99S3rySJR.right.start" });
                    }
                    {
                        skConstraint(sketch, "0fW99S3rySJR.corner2", { "constraintType" : ConstraintType.COINCIDENT, "index" : "8", "name" : "", "localFirst" : "0fW99S3rySJR.top.start", "localSecond" : "0fW99S3rySJR.left.end" });
                    }
                    {
                        skConstraint(sketch, "0fW99S3rySJR.corner3", { "constraintType" : ConstraintType.COINCIDENT, "index" : "9", "name" : "", "localFirst" : "0fW99S3rySJR.top.end", "localSecond" : "0fW99S3rySJR.right.end" });
                    }
                    {
                        skConstraint(sketch, "VlGk6V9geeLY", { "constraintType" : ConstraintType.DISTANCE, "index" : "3", "name" : "", "localFirst" : "0fW99S3rySJR.left", "localSecond" : "0fW99S3rySJR.right", "direction" : DimensionDirection.MINIMUM, "length" : { 'value' : try(92.6 * millimeter), 'expression' : "92.6 mm" }.value, "halfSpace0" : DimensionHalfSpace.LEFT, "halfSpace1" : DimensionHalfSpace.RIGHT, "labelRatio" : 0.5, "labelDistance" : -0.021047185871152185 * meter });
                    }
                    {
                        skConstraint(sketch, "nvyxb4YMQAob", { "constraintType" : ConstraintType.DISTANCE, "index" : "4", "name" : "", "localFirst" : "0fW99S3rySJR.top", "localSecond" : "0fW99S3rySJR.bottom", "direction" : DimensionDirection.MINIMUM, "length" : { 'value' : try(65 * millimeter), 'expression' : "65 mm" }.value, "halfSpace0" : DimensionHalfSpace.LEFT, "halfSpace1" : DimensionHalfSpace.RIGHT, "labelRatio" : 0.5, "labelDistance" : -0.03945131255455327 * meter });
                    }
                    {
                        skConstraint(sketch, "fZ1DgDsD4BpD", { "constraintType" : ConstraintType.DISTANCE, "index" : "5", "name" : "", "localFirst" : "0fW99S3rySJR.right", "localSecond" : "GrnGX0c0h7Ll.right", "direction" : DimensionDirection.MINIMUM, "length" : { 'value' : try((2.9 + 5.5 / 2) * millimeter), 'expression' : "(2.9 + 5.5/2) mm" }.value, "halfSpace0" : DimensionHalfSpace.LEFT, "halfSpace1" : DimensionHalfSpace.RIGHT, "labelRatio" : 2.8887245890451414, "labelDistance" : 0.04582475073402749 * meter });
                    }
                    {
                        skConstraint(sketch, "wsvupvrGsREo", { "constraintType" : ConstraintType.DISTANCE, "index" : "6", "name" : "", "localFirst" : "0fW99S3rySJR.bottom", "localSecond" : "GrnGX0c0h7Ll.bottom", "direction" : DimensionDirection.MINIMUM, "length" : { 'value' : try((3.4 + 5.5 / 2) * millimeter), 'expression' : "(3.4 + 5.5/2) mm" }.value, "halfSpace0" : DimensionHalfSpace.LEFT, "halfSpace1" : DimensionHalfSpace.RIGHT, "labelRatio" : 1.5726113483916813, "labelDistance" : -0.05985450236201286 * meter });
                    }
                    {
                        skConstraint(sketch, "E1K4gf2SurWb.centerSnap0", { "constraintType" : ConstraintType.COINCIDENT, "index" : "10", "name" : "", "localFirst" : "E1K4gf2SurWb.center", "localSecond" : "0fW99S3rySJR.bottom.end" });
                    }
                    {
                        skConstraint(sketch, "WzKdtZ53KEn6.centerSnap0", { "constraintType" : ConstraintType.COINCIDENT, "index" : "11", "name" : "", "localFirst" : "WzKdtZ53KEn6.center", "localSecond" : "0fW99S3rySJR.top.end" });
                    }
                    {
                        skConstraint(sketch, "VFM5uiyng2aG.centerSnap0", { "constraintType" : ConstraintType.COINCIDENT, "index" : "12", "name" : "", "localFirst" : "VFM5uiyng2aG.center", "localSecond" : "0fW99S3rySJR.bottom.start" });
                    }
                    {
                        skConstraint(sketch, "yNI6JoUKGExw.centerSnap0", { "constraintType" : ConstraintType.COINCIDENT, "index" : "13", "name" : "", "localFirst" : "yNI6JoUKGExw.center", "localSecond" : "0fW99S3rySJR.top.start" });
                    }
                    {
                        skConstraint(sketch, "iAcUUvzA41S0", { "constraintType" : ConstraintType.DIAMETER, "index" : "1", "name" : "", "localFirst" : "VFM5uiyng2aG", "length" : { 'value' : try(5.5 * millimeter), 'expression' : "5.5 mm" }.value, "labelRatio" : 3.0727760900387135, "labelAngle" : -0.7959559976900804 * radian });
                    }
                    {
                        skConstraint(sketch, "IIQCmISijLab.0", { "constraintType" : ConstraintType.EQUAL, "index" : "1", "name" : "", "localFirst" : "VFM5uiyng2aG", "localSecond" : "yNI6JoUKGExw" });
                    }
                    {
                        skConstraint(sketch, "IIQCmISijLab.1", { "constraintType" : ConstraintType.EQUAL, "index" : "2", "name" : "", "localFirst" : "VFM5uiyng2aG", "localSecond" : "WzKdtZ53KEn6" });
                    }
                    {
                        skConstraint(sketch, "IIQCmISijLab.2", { "constraintType" : ConstraintType.EQUAL, "index" : "3", "name" : "", "localFirst" : "VFM5uiyng2aG", "localSecond" : "E1K4gf2SurWb" });
                    }
                    skSetInitialGuess(sketch, initialGuessF7jmyjHoKoPTEcM_0);
                    skSolve(sketch);
                }
            };
        try(features.F7jmyjHoKoPTEcM_0(id));
        features.FZIKSpLqpj1T3px_0 = function(id)
            {
                annotation { 'unused' : true }
                var features = features;
                if (true)
                {
                    const initialGuessFZIKSpLqpj1T3px_0 = { "2bbxNltBNCr8.0" : [0.05475, 0.002926204144954658, -1.8369701987210297E-16, -1.0, -0.03457379585504534, 0.04042620414495466], "2bbxNltBNCr8.1" : [0.0, -0.0405, 1.0, 0.0, -0.051750000000000004, 0.05174999999999999], "2bbxNltBNCr8.2" : [-0.05475, 0.002926204144954678, -1.8369701987210297E-16, -1.0, -0.034573795855045324, 0.040426204144954674], "2bbxNltBNCr8.3" : [0.017323761045932782, 0.0405, 1.0, 0.0, -0.06907376104593277, 0.034426238954067226], "gU6UubjxYI9v.0" : [0.05725, 0.0029262041449546576, -1.8369701987210297E-16, -1.0, -0.03457379585504533, 0.04042620414495465], "gU6UubjxYI9v.1" : [0.0, -0.043000000000000003, 1.0, 0.0, -0.05175, 0.05174999999999999], "gU6UubjxYI9v.2" : [-0.05725, 0.0029262041449546784, -1.8369701987210297E-16, -1.0, -0.03457379585504533, 0.04042620414495467], "gU6UubjxYI9v.3" : [0.017323761045932782, 0.043000000000000003, 1.0, 0.0, -0.06907376104593277, 0.034426238954067226], "MA5XdPfChSaE.0.visualSharp" : [-0.05474999999999999, 0.0405], "MA5XdPfChSaE.0.filletArc" : [-0.05174999999999999, 0.0375, 1.0, 0.0, 0.003, -1.0, 1.5707963267948966, 3.141592653589793], "MA5XdPfChSaE.1.visualSharp" : [-0.05475000000000001, -0.0405], "MA5XdPfChSaE.1.filletArc" : [-0.051750000000000004, -0.0375, 1.0, 0.0, 0.003, -1.0, -3.141592653589793, -1.5707963267948966], "MA5XdPfChSaE.2.visualSharp" : [0.05474999999999999, -0.0405], "MA5XdPfChSaE.2.filletArc" : [0.05174999999999999, -0.0375, 1.0, 0.0, 0.003, -1.0, -1.5707963267948966, 0.0], "MA5XdPfChSaE.3.visualSharp" : [0.05475000000000001, 0.0405], "MA5XdPfChSaE.3.filletArc" : [0.051750000000000004, 0.0375, 1.0, 0.0, 0.003, -1.0, 0.0, 1.5707963267948966], "Z6H8oOUPryUQ.0.visualSharp" : [-0.057249999999999995, 0.043], "Z6H8oOUPryUQ.0.filletArc" : [-0.051749999999999984, 0.037500000000000006, 1.0, 0.0, 0.005500000000000007, -1.0, 1.5707963267948966, 3.141592653589793], "Z6H8oOUPryUQ.1.visualSharp" : [0.05725000000000001, 0.04300000000000001], "Z6H8oOUPryUQ.1.filletArc" : [0.051750000000000004, 0.03749999999999999, 1.0, 0.0, 0.005500000000000007, -1.0, 0.0, 1.5707963267948966], "Z6H8oOUPryUQ.2.visualSharp" : [0.057249999999999995, -0.043], "Z6H8oOUPryUQ.2.filletArc" : [0.05174999999999999, -0.0375, 1.0, 0.0, 0.005500000000000007, -1.0, -1.5707963267948966, 0.0], "Z6H8oOUPryUQ.3.visualSharp" : [-0.05725000000000001, -0.043000000000000003], "Z6H8oOUPryUQ.3.filletArc" : [-0.05175, -0.0375, 1.0, 0.0, 0.005500000000000007, -1.0, -3.141592653589793, -1.5707963267948966], "UYZbqS7RDrGI" : [-0.045500000000000006, 0.03235, 1.0, 0.0, 0.005, -1.0], "anZQG542TYmv" : [0.047099999999999996, 0.03234999999999999, 1.0, 0.0, 0.0049999999999999975, -1.0], "KK7gqK9IN9Z0" : [0.04709999999999999, -0.03265000000000001, 1.0, 0.0, 0.0049999999999999975, -1.0], "PIX3MfUTB8Lw" : [-0.04550000000000001, -0.032650000000000005, 1.0, 0.0, 0.0049999999999999975, -1.0], "R6ds4eHvNKFm.bottom" : [0.006545106759294867, 0.01025, 1.0, 0.0, -0.0015451067592948675, 0.0024548932407051343], "R6ds4eHvNKFm.top" : [0.006545106759294866, -0.00975, 1.0, 0.0, -0.0015451067592948701, 0.0024548932407051317], "R6ds4eHvNKFm.left" : [0.0049999999999999975, -7.602835856378078E-4, -1.8369701987210297E-16, -1.0, -0.011010283585637808, 0.008989716414362192], "R6ds4eHvNKFm.right" : [0.009, -7.602835856378078E-4, -1.8369701987210297E-16, -1.0, -0.011010283585637808, 0.008989716414362192], "R6ds4eHvNKFm.middle" : [0.006999999999999998, 2.500000000000002E-4], "KOKDdFu301Ln" : [0.033749999999999995, -0.022, 1.0, 0.0, 0.00375, -1.0], "EkcNhPwMKmQq" : [-5.000000000000053E-4, -0.0235, 1.0, 0.0, 0.00375, -1.0], "CHeGIyplm84D.bottom" : [0.02924875025451183, 0.014499999999999999, 1.0, 0.0, -0.014748750254511828, 0.020751249745488174], "CHeGIyplm84D.top" : [0.02924875025451183, -0.015000000000000003, 1.0, 0.0, -0.014748750254511833, 0.020751249745488174], "CHeGIyplm84D.left" : [0.014499999999999997, -0.004200031980872155, -1.8369701987210297E-16, -1.0, -0.018700031980872153, 0.010799968019127849], "CHeGIyplm84D.right" : [0.05, -0.004200031980872163, -1.8369701987210297E-16, -1.0, -0.01870003198087216, 0.01079996801912784], "CHeGIyplm84D.middle" : [0.03225, -2.50000000000005E-4], "2bbxNltBNCr8.2.offset" : [0.0, 0.0, 0.0, 0.0], "2bbxNltBNCr8.1.offset" : [0.0, 0.0, 0.0, 0.0], "2bbxNltBNCr8.0.offset" : [0.0, 0.0, 0.0, 0.0], "gU6UubjxYI9v.2.offset" : [0.0, 0.0, 0.0, 0.0], "gU6UubjxYI9v.1.offset" : [0.0, 0.0, 0.0, 0.0], "gU6UubjxYI9v.0.offset" : [0.0, 0.0, 0.0, 0.0], "MA5XdPfChSaE.0.tangentA" : [3.141592653589793], "MA5XdPfChSaE.0.tangentB" : [1.5707963267948966], "MA5XdPfChSaE.1.tangentA" : [-1.5707963267948966], "MA5XdPfChSaE.1.tangentB" : [3.141592653589793], "MA5XdPfChSaE.2.tangentA" : [0.0], "MA5XdPfChSaE.2.tangentB" : [-1.5707963267948966], "MA5XdPfChSaE.3.tangentA" : [0.0], "MA5XdPfChSaE.3.tangentB" : [1.5707963267948966], "Z6H8oOUPryUQ.0.tangentA" : [3.141592653589793], "Z6H8oOUPryUQ.0.tangentB" : [1.5707963267948966], "Z6H8oOUPryUQ.1.tangentA" : [0.0], "Z6H8oOUPryUQ.1.tangentB" : [1.5707963267948966], "Z6H8oOUPryUQ.2.tangentA" : [0.0], "Z6H8oOUPryUQ.2.tangentB" : [-1.5707963267948966], "Z6H8oOUPryUQ.3.tangentA" : [-1.5707963267948966], "Z6H8oOUPryUQ.3.tangentB" : [3.141592653589793] };
                    {
                    }
                    var iNbGngxMYbHduY_query;
                    iNbGngxMYbHduY_query=qCompressed(1.0,"&29e$eJydkl1vgjAUhv9Md6mhIKCXCAUZAq5lH+7GAO20TijDOsd+/RAXs0UTl9007Xn7PKcn6c1YB3c7VjehTqAKKN+mRcaXu1RyUTqpTC0YqudJ0lSMDEESz+Jp7M3bLSsll5xtLcNSbaW1ZYCymr8z6tai6Crp8VJzgMcpQKcDGQDkeKhFVnwrRd18622MrMSPozYQFau7zj4dq8CnFiQQ9g3gmuuiWU9EIGYJysOFsuc1iysyAm+HqToRBSRAiT1ZoCjxkzlhYPvKZL46PsCnJG9FXl16T0qurMzpJhNSigLr2MAmHuKRnbfterRvAl5UNS8lzokJ/HCG/ShxevA4MR5064nCGc4xxYz0oNbXgBTVjwyqbQg15y/sAGzYizyHMUyv0Dl4/AyofNa1AJXGJYN+1fDghvqON+VSTb3/GZrIN27FfeChj/1FA9Zts/0DrmWj39kXGSvNdg==",id);
                    annotation { "Feature Name" : "Case Base" }
                    var sketch = newSketch(context, id + "FZIKSpLqpj1T3px_0", { "sketchPlane" : qUnion([iNbGngxMYbHduY_query]), "disableImprinting" : false });
                    skLineSegment(sketch, "2bbxNltBNCr8.0", { "construction" : false, "index" : "1" });
                    skLineSegment(sketch, "2bbxNltBNCr8.1", { "construction" : false, "index" : "2" });
                    skLineSegment(sketch, "2bbxNltBNCr8.2", { "construction" : false, "index" : "3" });
                    skLineSegment(sketch, "2bbxNltBNCr8.3", { "construction" : false, "index" : "4" });
                    skLineSegment(sketch, "gU6UubjxYI9v.0", { "construction" : false, "index" : "5" });
                    skLineSegment(sketch, "gU6UubjxYI9v.1", { "construction" : false, "index" : "6" });
                    skLineSegment(sketch, "gU6UubjxYI9v.2", { "construction" : false, "index" : "7" });
                    skLineSegment(sketch, "gU6UubjxYI9v.3", { "construction" : false, "index" : "8" });
                    skPoint(sketch, "MA5XdPfChSaE.0.visualSharp", { "construction" : false, "index" : "1" });
                    skArc(sketch, "MA5XdPfChSaE.0.filletArc", { "construction" : false, "index" : "1" });
                    skPoint(sketch, "MA5XdPfChSaE.1.visualSharp", { "construction" : false, "index" : "2" });
                    skArc(sketch, "MA5XdPfChSaE.1.filletArc", { "construction" : false, "index" : "2" });
                    skPoint(sketch, "MA5XdPfChSaE.2.visualSharp", { "construction" : false, "index" : "3" });
                    skArc(sketch, "MA5XdPfChSaE.2.filletArc", { "construction" : false, "index" : "3" });
                    skPoint(sketch, "MA5XdPfChSaE.3.visualSharp", { "construction" : false, "index" : "4" });
                    skArc(sketch, "MA5XdPfChSaE.3.filletArc", { "construction" : false, "index" : "4" });
                    skPoint(sketch, "Z6H8oOUPryUQ.0.visualSharp", { "construction" : false, "index" : "5" });
                    skArc(sketch, "Z6H8oOUPryUQ.0.filletArc", { "construction" : false, "index" : "5" });
                    skPoint(sketch, "Z6H8oOUPryUQ.1.visualSharp", { "construction" : false, "index" : "6" });
                    skArc(sketch, "Z6H8oOUPryUQ.1.filletArc", { "construction" : false, "index" : "6" });
                    skPoint(sketch, "Z6H8oOUPryUQ.2.visualSharp", { "construction" : false, "index" : "7" });
                    skArc(sketch, "Z6H8oOUPryUQ.2.filletArc", { "construction" : false, "index" : "7" });
                    skPoint(sketch, "Z6H8oOUPryUQ.3.visualSharp", { "construction" : false, "index" : "8" });
                    skArc(sketch, "Z6H8oOUPryUQ.3.filletArc", { "construction" : false, "index" : "8" });
                    skCircle(sketch, "UYZbqS7RDrGI", { "construction" : false, "index" : "9" });
                    skCircle(sketch, "anZQG542TYmv", { "construction" : false, "index" : "10" });
                    skCircle(sketch, "KK7gqK9IN9Z0", { "construction" : false, "index" : "11" });
                    skCircle(sketch, "PIX3MfUTB8Lw", { "construction" : false, "index" : "12" });
                    skLineSegment(sketch, "R6ds4eHvNKFm.bottom", { "construction" : false, "index" : "9" });
                    skLineSegment(sketch, "R6ds4eHvNKFm.top", { "construction" : false, "index" : "10" });
                    skLineSegment(sketch, "R6ds4eHvNKFm.left", { "construction" : false, "index" : "11" });
                    skLineSegment(sketch, "R6ds4eHvNKFm.right", { "construction" : false, "index" : "12" });
                    skPoint(sketch, "R6ds4eHvNKFm.middle", { "construction" : true, "index" : "9" });
                    skCircle(sketch, "KOKDdFu301Ln", { "construction" : false, "index" : "13" });
                    skCircle(sketch, "EkcNhPwMKmQq", { "construction" : false, "index" : "14" });
                    skLineSegment(sketch, "CHeGIyplm84D.bottom", { "construction" : true, "index" : "13" });
                    skLineSegment(sketch, "CHeGIyplm84D.top", { "construction" : true, "index" : "14" });
                    skLineSegment(sketch, "CHeGIyplm84D.left", { "construction" : true, "index" : "15" });
                    skLineSegment(sketch, "CHeGIyplm84D.right", { "construction" : true, "index" : "16" });
                    skPoint(sketch, "CHeGIyplm84D.middle", { "construction" : true, "index" : "10" });
                    {
                        var VsXtDApWNHDaAW_query;
                        VsXtDApWNHDaAW_query=qCompressed(1.0,"%B5$QueryM5Sa$entityTypeBa$EntityTypeS4$EDGESb$historyTypeS8$CREATIONSb$operationIdB2$IdA1S11.6$F7jmyjHoKoPTEcM_0wireOpS9$queryTypeSd$SKETCH_ENTITYSe$sketchEntityIdSc.6$GrnGX0c0h7Llbottom",id);
                        skConstraint(sketch, "2bbxNltBNCr8.distance", { "constraintType" : ConstraintType.DISTANCE, "index" : "1", "name" : "", "externalFirst" : qUnion([VsXtDApWNHDaAW_query]), "localSecond" : "2bbxNltBNCr8.3", "direction" : DimensionDirection.MINIMUM, "length" : { 'value' : try(2 * millimeter), 'expression' : "2 mm" }.value, "halfSpace0" : DimensionHalfSpace.LEFT, "halfSpace1" : DimensionHalfSpace.RIGHT, "labelRatio" : 0.4999999999999993, "labelDistance" : -0.040618188679218285 * meter, "sketchToolType" : SketchToolType.OFFSET });
                    }
                    {
                        var tKMisBDrUVowEs_query;
                        tKMisBDrUVowEs_query=qCompressed(1.0,"%B5$QueryM5Sa$entityTypeBa$EntityTypeS4$EDGESb$historyTypeS8$CREATIONSb$operationIdB2$IdA1S11.6$F7jmyjHoKoPTEcM_0wireOpS9$queryTypeSd$SKETCH_ENTITYSe$sketchEntityIdSc.6$GrnGX0c0h7Llbottom",id);
                        var gqgGNxbPRwmriv_query;
                        gqgGNxbPRwmriv_query=qCompressed(1.0,"%B5$QueryM5Sa$entityTypeBa$EntityTypeS4$EDGESb$historyTypeS8$CREATIONSb$operationIdB2$IdA1S11.6$F7jmyjHoKoPTEcM_0wireOpS9$queryTypeSd$SKETCH_ENTITYSe$sketchEntityIdSc.4$GrnGX0c0h7Llleft",id);
                        skConstraint(sketch, "2bbxNltBNCr8.2.offset", { "constraintType" : ConstraintType.OFFSET, "index" : "1", "name" : "", "localOffset" : "2bbxNltBNCr8.3", "localSecondOffset" : "2bbxNltBNCr8.2", "externalMaster" : qUnion([tKMisBDrUVowEs_query]), "externalSecond" : qUnion([gqgGNxbPRwmriv_query]), "halfSpace0" : DimensionHalfSpace.LEFT, "halfSpace1" : DimensionHalfSpace.RIGHT, "halfSpace2" : DimensionHalfSpace.RIGHT, "halfSpace3" : DimensionHalfSpace.LEFT, "sketchToolType" : SketchToolType.OFFSET });
                    }
                    {
                        var RdFoOBmTIHhqJE_query;
                        RdFoOBmTIHhqJE_query=qCompressed(1.0,"%B5$QueryM5Sa$entityTypeBa$EntityTypeS4$EDGESb$historyTypeS8$CREATIONSb$operationIdB2$IdA1S11.6$F7jmyjHoKoPTEcM_0wireOpS9$queryTypeSd$SKETCH_ENTITYSe$sketchEntityIdSc.6$GrnGX0c0h7Llbottom",id);
                        var edEAiMNPrGIFhH_query;
                        edEAiMNPrGIFhH_query=qCompressed(1.0,"%B5$QueryM5Sa$entityTypeBa$EntityTypeS4$EDGESb$historyTypeS8$CREATIONSb$operationIdB2$IdA1S11.6$F7jmyjHoKoPTEcM_0wireOpS9$queryTypeSd$SKETCH_ENTITYSe$sketchEntityIdSc.3$GrnGX0c0h7Lltop",id);
                        skConstraint(sketch, "2bbxNltBNCr8.1.offset", { "constraintType" : ConstraintType.OFFSET, "index" : "2", "name" : "", "localOffset" : "2bbxNltBNCr8.3", "localSecondOffset" : "2bbxNltBNCr8.1", "externalMaster" : qUnion([RdFoOBmTIHhqJE_query]), "externalSecond" : qUnion([edEAiMNPrGIFhH_query]), "halfSpace0" : DimensionHalfSpace.LEFT, "halfSpace1" : DimensionHalfSpace.RIGHT, "halfSpace2" : DimensionHalfSpace.RIGHT, "halfSpace3" : DimensionHalfSpace.LEFT, "sketchToolType" : SketchToolType.OFFSET });
                    }
                    {
                        var oraRGptnsawEsK_query;
                        oraRGptnsawEsK_query=qCompressed(1.0,"%B5$QueryM5Sa$entityTypeBa$EntityTypeS4$EDGESb$historyTypeS8$CREATIONSb$operationIdB2$IdA1S11.6$F7jmyjHoKoPTEcM_0wireOpS9$queryTypeSd$SKETCH_ENTITYSe$sketchEntityIdSc.6$GrnGX0c0h7Llbottom",id);
                        var EUSzOevsBtluKW_query;
                        EUSzOevsBtluKW_query=qCompressed(1.0,"%B5$QueryM5Sa$entityTypeBa$EntityTypeS4$EDGESb$historyTypeS8$CREATIONSb$operationIdB2$IdA1S11.6$F7jmyjHoKoPTEcM_0wireOpS9$queryTypeSd$SKETCH_ENTITYSe$sketchEntityIdSc.5$GrnGX0c0h7Llright",id);
                        skConstraint(sketch, "2bbxNltBNCr8.0.offset", { "constraintType" : ConstraintType.OFFSET, "index" : "3", "name" : "", "localOffset" : "2bbxNltBNCr8.3", "localSecondOffset" : "2bbxNltBNCr8.0", "externalMaster" : qUnion([oraRGptnsawEsK_query]), "externalSecond" : qUnion([EUSzOevsBtluKW_query]), "halfSpace0" : DimensionHalfSpace.LEFT, "halfSpace1" : DimensionHalfSpace.RIGHT, "halfSpace2" : DimensionHalfSpace.LEFT, "halfSpace3" : DimensionHalfSpace.RIGHT, "sketchToolType" : SketchToolType.OFFSET });
                    }
                    {
                        skConstraint(sketch, "gU6UubjxYI9v.distance", { "constraintType" : ConstraintType.DISTANCE, "index" : "2", "name" : "", "localFirst" : "2bbxNltBNCr8.3", "localSecond" : "gU6UubjxYI9v.3", "direction" : DimensionDirection.MINIMUM, "length" : { 'value' : try(2.5 * millimeter), 'expression' : "2.5 mm" }.value, "halfSpace0" : DimensionHalfSpace.LEFT, "halfSpace1" : DimensionHalfSpace.RIGHT, "labelRatio" : 0.4999999999999993, "labelDistance" : -3.469446951953614E-18 * meter, "sketchToolType" : SketchToolType.OFFSET });
                    }
                    {
                        skConstraint(sketch, "gU6UubjxYI9v.2.offset", { "constraintType" : ConstraintType.OFFSET, "index" : "4", "name" : "", "localOffset" : "gU6UubjxYI9v.3", "localSecondOffset" : "gU6UubjxYI9v.2", "localMaster" : "2bbxNltBNCr8.3", "localSecond" : "2bbxNltBNCr8.2", "halfSpace0" : DimensionHalfSpace.LEFT, "halfSpace1" : DimensionHalfSpace.RIGHT, "halfSpace2" : DimensionHalfSpace.RIGHT, "halfSpace3" : DimensionHalfSpace.LEFT, "sketchToolType" : SketchToolType.OFFSET });
                    }
                    {
                        skConstraint(sketch, "gU6UubjxYI9v.1.offset", { "constraintType" : ConstraintType.OFFSET, "index" : "5", "name" : "", "localOffset" : "gU6UubjxYI9v.3", "localSecondOffset" : "gU6UubjxYI9v.1", "localMaster" : "2bbxNltBNCr8.3", "localSecond" : "2bbxNltBNCr8.1", "halfSpace0" : DimensionHalfSpace.LEFT, "halfSpace1" : DimensionHalfSpace.RIGHT, "halfSpace2" : DimensionHalfSpace.RIGHT, "halfSpace3" : DimensionHalfSpace.LEFT, "sketchToolType" : SketchToolType.OFFSET });
                    }
                    {
                        skConstraint(sketch, "gU6UubjxYI9v.0.offset", { "constraintType" : ConstraintType.OFFSET, "index" : "6", "name" : "", "localOffset" : "gU6UubjxYI9v.3", "localSecondOffset" : "gU6UubjxYI9v.0", "localMaster" : "2bbxNltBNCr8.3", "localSecond" : "2bbxNltBNCr8.0", "halfSpace0" : DimensionHalfSpace.LEFT, "halfSpace1" : DimensionHalfSpace.RIGHT, "halfSpace2" : DimensionHalfSpace.LEFT, "halfSpace3" : DimensionHalfSpace.RIGHT, "sketchToolType" : SketchToolType.OFFSET });
                    }
                    {
                        skConstraint(sketch, "MA5XdPfChSaE.0.visualSharp.coincidentB", { "constraintType" : ConstraintType.COINCIDENT, "index" : "9", "name" : "", "localFirst" : "MA5XdPfChSaE.0.visualSharp", "localSecond" : "2bbxNltBNCr8.3", "sketchToolType" : SketchToolType.FILLET });
                    }
                    {
                        skConstraint(sketch, "MA5XdPfChSaE.0.visualSharp.coincident", { "constraintType" : ConstraintType.COINCIDENT, "index" : "10", "name" : "", "localFirst" : "MA5XdPfChSaE.0.visualSharp", "localSecond" : "2bbxNltBNCr8.2", "sketchToolType" : SketchToolType.FILLET });
                    }
                    {
                        skConstraint(sketch, "MA5XdPfChSaE.0.filletArc.startSnap", { "constraintType" : ConstraintType.COINCIDENT, "index" : "11", "name" : "", "localFirst" : "MA5XdPfChSaE.0.filletArc.start", "localSecond" : "2bbxNltBNCr8.3.start", "sketchToolType" : SketchToolType.FILLET });
                    }
                    {
                        skConstraint(sketch, "MA5XdPfChSaE.0.filletArc.endSnap", { "constraintType" : ConstraintType.COINCIDENT, "index" : "12", "name" : "", "localFirst" : "MA5XdPfChSaE.0.filletArc.end", "localSecond" : "2bbxNltBNCr8.2.start", "sketchToolType" : SketchToolType.FILLET });
                    }
                    {
                        skConstraint(sketch, "MA5XdPfChSaE.0.tangentA", { "constraintType" : ConstraintType.TANGENT, "index" : "1", "name" : "", "localFirst" : "2bbxNltBNCr8.2", "localSecond" : "MA5XdPfChSaE.0.filletArc", "sketchToolType" : SketchToolType.FILLET });
                    }
                    {
                        skConstraint(sketch, "MA5XdPfChSaE.0.tangentB", { "constraintType" : ConstraintType.TANGENT, "index" : "2", "name" : "", "localFirst" : "2bbxNltBNCr8.3", "localSecond" : "MA5XdPfChSaE.0.filletArc", "sketchToolType" : SketchToolType.FILLET });
                    }
                    {
                        skConstraint(sketch, "MA5XdPfChSaE.0.radius", { "constraintType" : ConstraintType.RADIUS, "index" : "1", "name" : "", "localFirst" : "MA5XdPfChSaE.0.filletArc", "length" : { 'value' : try(3 * millimeter), 'expression' : "3 mm" }.value, "radiusDisplay" : RadiusDisplay.RADIAL, "labelRatio" : 7.149946673355196, "labelAngle" : 0.6159819654248792 * radian, "sketchToolType" : SketchToolType.FILLET });
                    }
                    {
                        skConstraint(sketch, "MA5XdPfChSaE.1.visualSharp.coincidentB", { "constraintType" : ConstraintType.COINCIDENT, "index" : "13", "name" : "", "localFirst" : "MA5XdPfChSaE.1.visualSharp", "localSecond" : "2bbxNltBNCr8.2", "sketchToolType" : SketchToolType.FILLET });
                    }
                    {
                        skConstraint(sketch, "MA5XdPfChSaE.1.visualSharp.coincident", { "constraintType" : ConstraintType.COINCIDENT, "index" : "14", "name" : "", "localFirst" : "MA5XdPfChSaE.1.visualSharp", "localSecond" : "2bbxNltBNCr8.1", "sketchToolType" : SketchToolType.FILLET });
                    }
                    {
                        skConstraint(sketch, "MA5XdPfChSaE.1.filletArc.startSnap", { "constraintType" : ConstraintType.COINCIDENT, "index" : "15", "name" : "", "localFirst" : "MA5XdPfChSaE.1.filletArc.start", "localSecond" : "2bbxNltBNCr8.2.end", "sketchToolType" : SketchToolType.FILLET });
                    }
                    {
                        skConstraint(sketch, "MA5XdPfChSaE.1.filletArc.endSnap", { "constraintType" : ConstraintType.COINCIDENT, "index" : "16", "name" : "", "localFirst" : "MA5XdPfChSaE.1.filletArc.end", "localSecond" : "2bbxNltBNCr8.1.start", "sketchToolType" : SketchToolType.FILLET });
                    }
                    {
                        skConstraint(sketch, "MA5XdPfChSaE.1.tangentA", { "constraintType" : ConstraintType.TANGENT, "index" : "3", "name" : "", "localFirst" : "2bbxNltBNCr8.1", "localSecond" : "MA5XdPfChSaE.1.filletArc", "sketchToolType" : SketchToolType.FILLET });
                    }
                    {
                        skConstraint(sketch, "MA5XdPfChSaE.1.tangentB", { "constraintType" : ConstraintType.TANGENT, "index" : "4", "name" : "", "localFirst" : "2bbxNltBNCr8.2", "localSecond" : "MA5XdPfChSaE.1.filletArc", "sketchToolType" : SketchToolType.FILLET });
                    }
                    {
                        skConstraint(sketch, "MA5XdPfChSaE.1.equal", { "constraintType" : ConstraintType.EQUAL, "index" : "1", "name" : "", "localFirst" : "MA5XdPfChSaE.1.filletArc", "localSecond" : "MA5XdPfChSaE.0.filletArc", "sketchToolType" : SketchToolType.FILLET });
                    }
                    {
                        skConstraint(sketch, "MA5XdPfChSaE.2.visualSharp.coincidentB", { "constraintType" : ConstraintType.COINCIDENT, "index" : "17", "name" : "", "localFirst" : "MA5XdPfChSaE.2.visualSharp", "localSecond" : "2bbxNltBNCr8.1", "sketchToolType" : SketchToolType.FILLET });
                    }
                    {
                        skConstraint(sketch, "MA5XdPfChSaE.2.visualSharp.coincident", { "constraintType" : ConstraintType.COINCIDENT, "index" : "18", "name" : "", "localFirst" : "MA5XdPfChSaE.2.visualSharp", "localSecond" : "2bbxNltBNCr8.0", "sketchToolType" : SketchToolType.FILLET });
                    }
                    {
                        skConstraint(sketch, "MA5XdPfChSaE.2.filletArc.startSnap", { "constraintType" : ConstraintType.COINCIDENT, "index" : "19", "name" : "", "localFirst" : "MA5XdPfChSaE.2.filletArc.start", "localSecond" : "2bbxNltBNCr8.1.end", "sketchToolType" : SketchToolType.FILLET });
                    }
                    {
                        skConstraint(sketch, "MA5XdPfChSaE.2.filletArc.endSnap", { "constraintType" : ConstraintType.COINCIDENT, "index" : "20", "name" : "", "localFirst" : "MA5XdPfChSaE.2.filletArc.end", "localSecond" : "2bbxNltBNCr8.0.end", "sketchToolType" : SketchToolType.FILLET });
                    }
                    {
                        skConstraint(sketch, "MA5XdPfChSaE.2.tangentA", { "constraintType" : ConstraintType.TANGENT, "index" : "5", "name" : "", "localFirst" : "2bbxNltBNCr8.0", "localSecond" : "MA5XdPfChSaE.2.filletArc", "sketchToolType" : SketchToolType.FILLET });
                    }
                    {
                        skConstraint(sketch, "MA5XdPfChSaE.2.tangentB", { "constraintType" : ConstraintType.TANGENT, "index" : "6", "name" : "", "localFirst" : "2bbxNltBNCr8.1", "localSecond" : "MA5XdPfChSaE.2.filletArc", "sketchToolType" : SketchToolType.FILLET });
                    }
                    {
                        skConstraint(sketch, "MA5XdPfChSaE.2.equal", { "constraintType" : ConstraintType.EQUAL, "index" : "2", "name" : "", "localFirst" : "MA5XdPfChSaE.2.filletArc", "localSecond" : "MA5XdPfChSaE.0.filletArc", "sketchToolType" : SketchToolType.FILLET });
                    }
                    {
                        skConstraint(sketch, "MA5XdPfChSaE.3.visualSharp.coincidentB", { "constraintType" : ConstraintType.COINCIDENT, "index" : "21", "name" : "", "localFirst" : "MA5XdPfChSaE.3.visualSharp", "localSecond" : "2bbxNltBNCr8.3", "sketchToolType" : SketchToolType.FILLET });
                    }
                    {
                        skConstraint(sketch, "MA5XdPfChSaE.3.visualSharp.coincident", { "constraintType" : ConstraintType.COINCIDENT, "index" : "22", "name" : "", "localFirst" : "MA5XdPfChSaE.3.visualSharp", "localSecond" : "2bbxNltBNCr8.0", "sketchToolType" : SketchToolType.FILLET });
                    }
                    {
                        skConstraint(sketch, "MA5XdPfChSaE.3.filletArc.startSnap", { "constraintType" : ConstraintType.COINCIDENT, "index" : "23", "name" : "", "localFirst" : "MA5XdPfChSaE.3.filletArc.start", "localSecond" : "2bbxNltBNCr8.0.start", "sketchToolType" : SketchToolType.FILLET });
                    }
                    {
                        skConstraint(sketch, "MA5XdPfChSaE.3.filletArc.endSnap", { "constraintType" : ConstraintType.COINCIDENT, "index" : "24", "name" : "", "localFirst" : "MA5XdPfChSaE.3.filletArc.end", "localSecond" : "2bbxNltBNCr8.3.end", "sketchToolType" : SketchToolType.FILLET });
                    }
                    {
                        skConstraint(sketch, "MA5XdPfChSaE.3.tangentA", { "constraintType" : ConstraintType.TANGENT, "index" : "7", "name" : "", "localFirst" : "2bbxNltBNCr8.0", "localSecond" : "MA5XdPfChSaE.3.filletArc", "sketchToolType" : SketchToolType.FILLET });
                    }
                    {
                        skConstraint(sketch, "MA5XdPfChSaE.3.tangentB", { "constraintType" : ConstraintType.TANGENT, "index" : "8", "name" : "", "localFirst" : "2bbxNltBNCr8.3", "localSecond" : "MA5XdPfChSaE.3.filletArc", "sketchToolType" : SketchToolType.FILLET });
                    }
                    {
                        skConstraint(sketch, "MA5XdPfChSaE.3.equal", { "constraintType" : ConstraintType.EQUAL, "index" : "3", "name" : "", "localFirst" : "MA5XdPfChSaE.3.filletArc", "localSecond" : "MA5XdPfChSaE.0.filletArc", "sketchToolType" : SketchToolType.FILLET });
                    }
                    {
                        skConstraint(sketch, "Z6H8oOUPryUQ.0.visualSharp.coincidentB", { "constraintType" : ConstraintType.COINCIDENT, "index" : "25", "name" : "", "localFirst" : "Z6H8oOUPryUQ.0.visualSharp", "localSecond" : "gU6UubjxYI9v.3", "sketchToolType" : SketchToolType.FILLET });
                    }
                    {
                        skConstraint(sketch, "Z6H8oOUPryUQ.0.visualSharp.coincident", { "constraintType" : ConstraintType.COINCIDENT, "index" : "26", "name" : "", "localFirst" : "Z6H8oOUPryUQ.0.visualSharp", "localSecond" : "gU6UubjxYI9v.2", "sketchToolType" : SketchToolType.FILLET });
                    }
                    {
                        skConstraint(sketch, "Z6H8oOUPryUQ.0.filletArc.startSnap", { "constraintType" : ConstraintType.COINCIDENT, "index" : "27", "name" : "", "localFirst" : "Z6H8oOUPryUQ.0.filletArc.start", "localSecond" : "gU6UubjxYI9v.3.start", "sketchToolType" : SketchToolType.FILLET });
                    }
                    {
                        skConstraint(sketch, "Z6H8oOUPryUQ.0.filletArc.endSnap", { "constraintType" : ConstraintType.COINCIDENT, "index" : "28", "name" : "", "localFirst" : "Z6H8oOUPryUQ.0.filletArc.end", "localSecond" : "gU6UubjxYI9v.2.start", "sketchToolType" : SketchToolType.FILLET });
                    }
                    {
                        skConstraint(sketch, "Z6H8oOUPryUQ.0.tangentA", { "constraintType" : ConstraintType.TANGENT, "index" : "9", "name" : "", "localFirst" : "gU6UubjxYI9v.2", "localSecond" : "Z6H8oOUPryUQ.0.filletArc", "sketchToolType" : SketchToolType.FILLET });
                    }
                    {
                        skConstraint(sketch, "Z6H8oOUPryUQ.0.tangentB", { "constraintType" : ConstraintType.TANGENT, "index" : "10", "name" : "", "localFirst" : "gU6UubjxYI9v.3", "localSecond" : "Z6H8oOUPryUQ.0.filletArc", "sketchToolType" : SketchToolType.FILLET });
                    }
                    {
                        skConstraint(sketch, "Z6H8oOUPryUQ.1.visualSharp.coincidentB", { "constraintType" : ConstraintType.COINCIDENT, "index" : "29", "name" : "", "localFirst" : "Z6H8oOUPryUQ.1.visualSharp", "localSecond" : "gU6UubjxYI9v.3", "sketchToolType" : SketchToolType.FILLET });
                    }
                    {
                        skConstraint(sketch, "Z6H8oOUPryUQ.1.visualSharp.coincident", { "constraintType" : ConstraintType.COINCIDENT, "index" : "30", "name" : "", "localFirst" : "Z6H8oOUPryUQ.1.visualSharp", "localSecond" : "gU6UubjxYI9v.0", "sketchToolType" : SketchToolType.FILLET });
                    }
                    {
                        skConstraint(sketch, "Z6H8oOUPryUQ.1.filletArc.startSnap", { "constraintType" : ConstraintType.COINCIDENT, "index" : "31", "name" : "", "localFirst" : "Z6H8oOUPryUQ.1.filletArc.start", "localSecond" : "gU6UubjxYI9v.0.start", "sketchToolType" : SketchToolType.FILLET });
                    }
                    {
                        skConstraint(sketch, "Z6H8oOUPryUQ.1.filletArc.endSnap", { "constraintType" : ConstraintType.COINCIDENT, "index" : "32", "name" : "", "localFirst" : "Z6H8oOUPryUQ.1.filletArc.end", "localSecond" : "gU6UubjxYI9v.3.end", "sketchToolType" : SketchToolType.FILLET });
                    }
                    {
                        skConstraint(sketch, "Z6H8oOUPryUQ.1.tangentA", { "constraintType" : ConstraintType.TANGENT, "index" : "11", "name" : "", "localFirst" : "gU6UubjxYI9v.0", "localSecond" : "Z6H8oOUPryUQ.1.filletArc", "sketchToolType" : SketchToolType.FILLET });
                    }
                    {
                        skConstraint(sketch, "Z6H8oOUPryUQ.1.tangentB", { "constraintType" : ConstraintType.TANGENT, "index" : "12", "name" : "", "localFirst" : "gU6UubjxYI9v.3", "localSecond" : "Z6H8oOUPryUQ.1.filletArc", "sketchToolType" : SketchToolType.FILLET });
                    }
                    {
                        skConstraint(sketch, "Z6H8oOUPryUQ.1.equal", { "constraintType" : ConstraintType.EQUAL, "index" : "4", "name" : "", "localFirst" : "Z6H8oOUPryUQ.1.filletArc", "localSecond" : "Z6H8oOUPryUQ.0.filletArc", "sketchToolType" : SketchToolType.FILLET });
                    }
                    {
                        skConstraint(sketch, "Z6H8oOUPryUQ.2.visualSharp.coincidentB", { "constraintType" : ConstraintType.COINCIDENT, "index" : "33", "name" : "", "localFirst" : "Z6H8oOUPryUQ.2.visualSharp", "localSecond" : "gU6UubjxYI9v.1", "sketchToolType" : SketchToolType.FILLET });
                    }
                    {
                        skConstraint(sketch, "Z6H8oOUPryUQ.2.visualSharp.coincident", { "constraintType" : ConstraintType.COINCIDENT, "index" : "34", "name" : "", "localFirst" : "Z6H8oOUPryUQ.2.visualSharp", "localSecond" : "gU6UubjxYI9v.0", "sketchToolType" : SketchToolType.FILLET });
                    }
                    {
                        skConstraint(sketch, "Z6H8oOUPryUQ.2.filletArc.startSnap", { "constraintType" : ConstraintType.COINCIDENT, "index" : "35", "name" : "", "localFirst" : "Z6H8oOUPryUQ.2.filletArc.start", "localSecond" : "gU6UubjxYI9v.1.end", "sketchToolType" : SketchToolType.FILLET });
                    }
                    {
                        skConstraint(sketch, "Z6H8oOUPryUQ.2.filletArc.endSnap", { "constraintType" : ConstraintType.COINCIDENT, "index" : "36", "name" : "", "localFirst" : "Z6H8oOUPryUQ.2.filletArc.end", "localSecond" : "gU6UubjxYI9v.0.end", "sketchToolType" : SketchToolType.FILLET });
                    }
                    {
                        skConstraint(sketch, "Z6H8oOUPryUQ.2.tangentA", { "constraintType" : ConstraintType.TANGENT, "index" : "13", "name" : "", "localFirst" : "gU6UubjxYI9v.0", "localSecond" : "Z6H8oOUPryUQ.2.filletArc", "sketchToolType" : SketchToolType.FILLET });
                    }
                    {
                        skConstraint(sketch, "Z6H8oOUPryUQ.2.tangentB", { "constraintType" : ConstraintType.TANGENT, "index" : "14", "name" : "", "localFirst" : "gU6UubjxYI9v.1", "localSecond" : "Z6H8oOUPryUQ.2.filletArc", "sketchToolType" : SketchToolType.FILLET });
                    }
                    {
                        skConstraint(sketch, "Z6H8oOUPryUQ.2.equal", { "constraintType" : ConstraintType.EQUAL, "index" : "5", "name" : "", "localFirst" : "Z6H8oOUPryUQ.2.filletArc", "localSecond" : "Z6H8oOUPryUQ.0.filletArc", "sketchToolType" : SketchToolType.FILLET });
                    }
                    {
                        skConstraint(sketch, "Z6H8oOUPryUQ.3.visualSharp.coincidentB", { "constraintType" : ConstraintType.COINCIDENT, "index" : "37", "name" : "", "localFirst" : "Z6H8oOUPryUQ.3.visualSharp", "localSecond" : "gU6UubjxYI9v.2", "sketchToolType" : SketchToolType.FILLET });
                    }
                    {
                        skConstraint(sketch, "Z6H8oOUPryUQ.3.visualSharp.coincident", { "constraintType" : ConstraintType.COINCIDENT, "index" : "38", "name" : "", "localFirst" : "Z6H8oOUPryUQ.3.visualSharp", "localSecond" : "gU6UubjxYI9v.1", "sketchToolType" : SketchToolType.FILLET });
                    }
                    {
                        skConstraint(sketch, "Z6H8oOUPryUQ.3.filletArc.startSnap", { "constraintType" : ConstraintType.COINCIDENT, "index" : "39", "name" : "", "localFirst" : "Z6H8oOUPryUQ.3.filletArc.start", "localSecond" : "gU6UubjxYI9v.2.end", "sketchToolType" : SketchToolType.FILLET });
                    }
                    {
                        skConstraint(sketch, "Z6H8oOUPryUQ.3.filletArc.endSnap", { "constraintType" : ConstraintType.COINCIDENT, "index" : "40", "name" : "", "localFirst" : "Z6H8oOUPryUQ.3.filletArc.end", "localSecond" : "gU6UubjxYI9v.1.start", "sketchToolType" : SketchToolType.FILLET });
                    }
                    {
                        skConstraint(sketch, "Z6H8oOUPryUQ.3.tangentA", { "constraintType" : ConstraintType.TANGENT, "index" : "15", "name" : "", "localFirst" : "gU6UubjxYI9v.1", "localSecond" : "Z6H8oOUPryUQ.3.filletArc", "sketchToolType" : SketchToolType.FILLET });
                    }
                    {
                        skConstraint(sketch, "Z6H8oOUPryUQ.3.tangentB", { "constraintType" : ConstraintType.TANGENT, "index" : "16", "name" : "", "localFirst" : "gU6UubjxYI9v.2", "localSecond" : "Z6H8oOUPryUQ.3.filletArc", "sketchToolType" : SketchToolType.FILLET });
                    }
                    {
                        skConstraint(sketch, "Z6H8oOUPryUQ.3.equal", { "constraintType" : ConstraintType.EQUAL, "index" : "6", "name" : "", "localFirst" : "Z6H8oOUPryUQ.3.filletArc", "localSecond" : "Z6H8oOUPryUQ.0.filletArc", "sketchToolType" : SketchToolType.FILLET });
                    }
                    {
                        skConstraint(sketch, "pAqLngZVStH00", { "constraintType" : ConstraintType.COINCIDENT, "index" : "41", "name" : "", "localFirst" : "Z6H8oOUPryUQ.0.filletArc.center", "localSecond" : "MA5XdPfChSaE.0.filletArc.center" });
                    }
                    {
                        var jzjMvEUHCnDIpr_query;
                        jzjMvEUHCnDIpr_query=qCompressed(1.0,"%B5$QueryM5Sa$entityTypeBa$EntityTypeS6$VERTEXSb$historyTypeS8$CREATIONSb$operationIdB2$IdA1S11.6$F7jmyjHoKoPTEcM_0wireOpS9$queryTypeSd$SKETCH_ENTITYSe$sketchEntityIdSc.6.5$0fW99S3rySJRbottomstart",id);
                        skConstraint(sketch, "UYZbqS7RDrGI.centerSnap0", { "constraintType" : ConstraintType.COINCIDENT, "index" : "42", "name" : "", "localFirst" : "UYZbqS7RDrGI.center", "externalSecond" : qUnion([jzjMvEUHCnDIpr_query]) });
                    }
                    {
                        var sjzJsHJkxJayrG_query;
                        sjzJsHJkxJayrG_query=qCompressed(1.0,"%B5$QueryM5Sa$entityTypeBa$EntityTypeS6$VERTEXSb$historyTypeS8$CREATIONSb$operationIdB2$IdA1S11.6$F7jmyjHoKoPTEcM_0wireOpS9$queryTypeSd$SKETCH_ENTITYSe$sketchEntityIdSc.6.3$0fW99S3rySJRbottomend",id);
                        skConstraint(sketch, "anZQG542TYmv.centerSnap0", { "constraintType" : ConstraintType.COINCIDENT, "index" : "43", "name" : "", "localFirst" : "anZQG542TYmv.center", "externalSecond" : qUnion([sjzJsHJkxJayrG_query]) });
                    }
                    {
                        var uAOTTvZzhHoZCY_query;
                        uAOTTvZzhHoZCY_query=qCompressed(1.0,"%B5$QueryM5Sa$entityTypeBa$EntityTypeS6$VERTEXSb$historyTypeS8$CREATIONSb$operationIdB2$IdA1S11.6$F7jmyjHoKoPTEcM_0wireOpS9$queryTypeSd$SKETCH_ENTITYSe$sketchEntityIdSc.3.3$0fW99S3rySJRtopend",id);
                        skConstraint(sketch, "KK7gqK9IN9Z0.centerSnap0", { "constraintType" : ConstraintType.COINCIDENT, "index" : "44", "name" : "", "localFirst" : "KK7gqK9IN9Z0.center", "externalSecond" : qUnion([uAOTTvZzhHoZCY_query]) });
                    }
                    {
                        var DGaylALmYBUkJF_query;
                        DGaylALmYBUkJF_query=qCompressed(1.0,"%B5$QueryM5Sa$entityTypeBa$EntityTypeS6$VERTEXSb$historyTypeS8$CREATIONSb$operationIdB2$IdA1S11.6$F7jmyjHoKoPTEcM_0wireOpS9$queryTypeSd$SKETCH_ENTITYSe$sketchEntityIdSc.3.5$0fW99S3rySJRtopstart",id);
                        skConstraint(sketch, "PIX3MfUTB8Lw.centerSnap0", { "constraintType" : ConstraintType.COINCIDENT, "index" : "45", "name" : "", "localFirst" : "PIX3MfUTB8Lw.center", "externalSecond" : qUnion([DGaylALmYBUkJF_query]) });
                    }
                    {
                        skConstraint(sketch, "AMQ5JEs7SrZK", { "constraintType" : ConstraintType.DIAMETER, "index" : "1", "name" : "", "localFirst" : "UYZbqS7RDrGI", "length" : { 'value' : try(10 * millimeter), 'expression' : "10 mm" }.value, "labelRatio" : 3.770110444401484, "labelAngle" : 0.6406741294824871 * radian });
                    }
                    {
                        skConstraint(sketch, "n9rAMbyhdo0F.0", { "constraintType" : ConstraintType.EQUAL, "index" : "7", "name" : "", "localFirst" : "PIX3MfUTB8Lw", "localSecond" : "anZQG542TYmv" });
                    }
                    {
                        skConstraint(sketch, "n9rAMbyhdo0F.1", { "constraintType" : ConstraintType.EQUAL, "index" : "8", "name" : "", "localFirst" : "PIX3MfUTB8Lw", "localSecond" : "KK7gqK9IN9Z0" });
                    }
                    {
                        skConstraint(sketch, "HmXgBWUp5HLk", { "constraintType" : ConstraintType.EQUAL, "index" : "9", "name" : "", "localFirst" : "PIX3MfUTB8Lw", "localSecond" : "UYZbqS7RDrGI" });
                    }
                    {
                        skConstraint(sketch, "R6ds4eHvNKFm.mid1", { "constraintType" : ConstraintType.MIDPOINT, "index" : "1", "name" : "", "localMidpoint" : "R6ds4eHvNKFm.middle", "localEntity1" : "R6ds4eHvNKFm.top.start", "localEntity2" : "R6ds4eHvNKFm.bottom.end" });
                    }
                    {
                        skConstraint(sketch, "R6ds4eHvNKFm.mid2", { "constraintType" : ConstraintType.MIDPOINT, "index" : "2", "name" : "", "localMidpoint" : "R6ds4eHvNKFm.middle", "localEntity1" : "R6ds4eHvNKFm.top.end", "localEntity2" : "R6ds4eHvNKFm.bottom.start" });
                    }
                    {
                        skConstraint(sketch, "R6ds4eHvNKFm.perpendicular", { "constraintType" : ConstraintType.PERPENDICULAR, "index" : "1", "name" : "", "localFirst" : "R6ds4eHvNKFm.top", "localSecond" : "R6ds4eHvNKFm.left" });
                    }
                    {
                        skConstraint(sketch, "R6ds4eHvNKFm.parallel.1", { "constraintType" : ConstraintType.PARALLEL, "index" : "1", "name" : "", "localFirst" : "R6ds4eHvNKFm.bottom", "localSecond" : "R6ds4eHvNKFm.top" });
                    }
                    {
                        skConstraint(sketch, "R6ds4eHvNKFm.parallel.2", { "constraintType" : ConstraintType.PARALLEL, "index" : "2", "name" : "", "localFirst" : "R6ds4eHvNKFm.left", "localSecond" : "R6ds4eHvNKFm.right" });
                    }
                    {
                        skConstraint(sketch, "R6ds4eHvNKFm.horizontal", { "constraintType" : ConstraintType.HORIZONTAL, "index" : "1", "name" : "", "localFirst" : "R6ds4eHvNKFm.top" });
                    }
                    {
                        skConstraint(sketch, "R6ds4eHvNKFm.corner0", { "constraintType" : ConstraintType.COINCIDENT, "index" : "46", "name" : "", "localFirst" : "R6ds4eHvNKFm.bottom.start", "localSecond" : "R6ds4eHvNKFm.left.start" });
                    }
                    {
                        skConstraint(sketch, "R6ds4eHvNKFm.corner1", { "constraintType" : ConstraintType.COINCIDENT, "index" : "47", "name" : "", "localFirst" : "R6ds4eHvNKFm.bottom.end", "localSecond" : "R6ds4eHvNKFm.right.start" });
                    }
                    {
                        skConstraint(sketch, "R6ds4eHvNKFm.corner2", { "constraintType" : ConstraintType.COINCIDENT, "index" : "48", "name" : "", "localFirst" : "R6ds4eHvNKFm.top.start", "localSecond" : "R6ds4eHvNKFm.left.end" });
                    }
                    {
                        skConstraint(sketch, "R6ds4eHvNKFm.corner3", { "constraintType" : ConstraintType.COINCIDENT, "index" : "49", "name" : "", "localFirst" : "R6ds4eHvNKFm.top.end", "localSecond" : "R6ds4eHvNKFm.right.end" });
                    }
                    {
                        skConstraint(sketch, "Vo5NlKU1nYhd", { "constraintType" : ConstraintType.EQUAL, "index" : "10", "name" : "", "localFirst" : "EkcNhPwMKmQq", "localSecond" : "KOKDdFu301Ln" });
                    }
                    {
                        skConstraint(sketch, "t33jQBSrWHe6", { "constraintType" : ConstraintType.DIAMETER, "index" : "2", "name" : "", "localFirst" : "EkcNhPwMKmQq", "length" : { 'value' : try(7.5 * millimeter), 'expression' : "7.5 mm" }.value, "labelRatio" : 3.8775434942510625, "labelAngle" : 2.422762723645148 * radian });
                    }
                    {
                        var SFwubhmcLjrVKO_query;
                        SFwubhmcLjrVKO_query=qCompressed(1.0,"%B5$QueryM5Sa$entityTypeBa$EntityTypeS4$EDGESb$historyTypeS8$CREATIONSb$operationIdB2$IdA1S11.6$F7jmyjHoKoPTEcM_0wireOpS9$queryTypeSd$SKETCH_ENTITYSe$sketchEntityIdSc.5$GrnGX0c0h7Llright",id);
                        skConstraint(sketch, "5aP3qrLcGaBy", { "constraintType" : ConstraintType.DISTANCE, "index" : "3", "name" : "", "externalFirst" : qUnion([SFwubhmcLjrVKO_query]), "localSecond" : "KOKDdFu301Ln.center", "direction" : DimensionDirection.MINIMUM, "length" : { 'value' : try(19 * millimeter), 'expression' : "19 mm" }.value, "halfSpace0" : DimensionHalfSpace.RIGHT, "labelRatio" : 0.568936567557934, "labelDistance" : -0.015718104317784313 * meter });
                    }
                    {
                        var AGkKTsbqxvmnZw_query;
                        AGkKTsbqxvmnZw_query=qCompressed(1.0,"%B5$QueryM5Sa$entityTypeBa$EntityTypeS4$EDGESb$historyTypeS8$CREATIONSb$operationIdB2$IdA1S11.6$F7jmyjHoKoPTEcM_0wireOpS9$queryTypeSd$SKETCH_ENTITYSe$sketchEntityIdSc.5$GrnGX0c0h7Llright",id);
                        skConstraint(sketch, "fBtHGCFTkmwF", { "constraintType" : ConstraintType.DISTANCE, "index" : "4", "name" : "", "externalFirst" : qUnion([AGkKTsbqxvmnZw_query]), "localSecond" : "EkcNhPwMKmQq.center", "direction" : DimensionDirection.MINIMUM, "length" : { 'value' : try(53.25 * millimeter), 'expression' : "53.25 mm" }.value, "halfSpace0" : DimensionHalfSpace.RIGHT, "labelRatio" : 0.4556794639023485, "labelDistance" : -0.02625292725861073 * meter });
                    }
                    {
                        var uCYgLcwFsGvlNX_query;
                        uCYgLcwFsGvlNX_query=qCompressed(1.0,"%B5$QueryM5Sa$entityTypeBa$EntityTypeS4$EDGESb$historyTypeS8$CREATIONSb$operationIdB2$IdA1S11.6$F7jmyjHoKoPTEcM_0wireOpS9$queryTypeSd$SKETCH_ENTITYSe$sketchEntityIdSc.3$GrnGX0c0h7Lltop",id);
                        skConstraint(sketch, "VmNlWF68wxh4", { "constraintType" : ConstraintType.DISTANCE, "index" : "5", "name" : "", "externalFirst" : qUnion([uCYgLcwFsGvlNX_query]), "localSecond" : "EkcNhPwMKmQq.center", "direction" : DimensionDirection.MINIMUM, "length" : { 'value' : try(15 * millimeter), 'expression' : "15 mm" }.value, "halfSpace0" : DimensionHalfSpace.LEFT, "labelRatio" : 0.5552346698139584, "labelDistance" : 0.008895690552890294 * meter });
                    }
                    {
                        var zYTtudEVSGHlEZ_query;
                        zYTtudEVSGHlEZ_query=qCompressed(1.0,"%B5$QueryM5Sa$entityTypeBa$EntityTypeS4$EDGESb$historyTypeS8$CREATIONSb$operationIdB2$IdA1S11.6$F7jmyjHoKoPTEcM_0wireOpS9$queryTypeSd$SKETCH_ENTITYSe$sketchEntityIdSc.3$GrnGX0c0h7Lltop",id);
                        skConstraint(sketch, "L36LFSGyIuA1", { "constraintType" : ConstraintType.DISTANCE, "index" : "6", "name" : "", "externalFirst" : qUnion([zYTtudEVSGHlEZ_query]), "localSecond" : "KOKDdFu301Ln.center", "direction" : DimensionDirection.MINIMUM, "length" : { 'value' : try(16.5 * millimeter), 'expression' : "16.5 mm" }.value, "halfSpace0" : DimensionHalfSpace.LEFT, "labelRatio" : 0.5296638875761354, "labelDistance" : -0.021585065871477134 * meter });
                    }
                    {
                        skConstraint(sketch, "ORhVzGebpN26", { "constraintType" : ConstraintType.LENGTH, "index" : "1", "name" : "", "localFirst" : "R6ds4eHvNKFm.right", "direction" : DimensionDirection.MINIMUM, "length" : { 'value' : try(20 * millimeter), 'expression' : "20 mm" }.value, "alignment" : DimensionAlignment.ALIGNED, "labelRatio" : 0.30468747936120444, "labelDistance" : -0.005197180667892098 * meter });
                    }
                    {
                        skConstraint(sketch, "hMtCWvZynCIk", { "constraintType" : ConstraintType.LENGTH, "index" : "2", "name" : "", "localFirst" : "R6ds4eHvNKFm.bottom", "direction" : DimensionDirection.MINIMUM, "length" : { 'value' : try(4 * millimeter), 'expression' : "4 mm" }.value, "alignment" : DimensionAlignment.ALIGNED, "labelRatio" : -2.8636376513426467, "labelDistance" : -0.0031766114011406894 * meter });
                    }
                    {
                        var wBvTdUfsVVNHGs_query;
                        wBvTdUfsVVNHGs_query=qCompressed(1.0,"%B5$QueryM5Sa$entityTypeBa$EntityTypeS4$EDGESb$historyTypeS8$CREATIONSb$operationIdB2$IdA1S11.6$F7jmyjHoKoPTEcM_0wireOpS9$queryTypeSd$SKETCH_ENTITYSe$sketchEntityIdSc.3$GrnGX0c0h7Lltop",id);
                        skConstraint(sketch, "WxxTqpFhCSht", { "constraintType" : ConstraintType.DISTANCE, "index" : "7", "name" : "", "externalFirst" : qUnion([wBvTdUfsVVNHGs_query]), "localSecond" : "R6ds4eHvNKFm.middle", "direction" : DimensionDirection.MINIMUM, "length" : { 'value' : try(38.75 * millimeter), 'expression' : "38.75 mm" }.value, "halfSpace0" : DimensionHalfSpace.LEFT, "labelRatio" : 0.48928252551941764, "labelDistance" : 0.02434676326811313 * meter });
                    }
                    {
                        var bfedzzNwkFmwDi_query;
                        bfedzzNwkFmwDi_query=qCompressed(1.0,"%B5$QueryM5Sa$entityTypeBa$EntityTypeS4$EDGESb$historyTypeS8$CREATIONSb$operationIdB2$IdA1S11.6$F7jmyjHoKoPTEcM_0wireOpS9$queryTypeSd$SKETCH_ENTITYSe$sketchEntityIdSc.5$GrnGX0c0h7Llright",id);
                        skConstraint(sketch, "kmsucWqZn3uE", { "constraintType" : ConstraintType.DISTANCE, "index" : "8", "name" : "", "externalFirst" : qUnion([bfedzzNwkFmwDi_query]), "localSecond" : "R6ds4eHvNKFm.middle", "direction" : DimensionDirection.MINIMUM, "length" : { 'value' : try(45.75 * millimeter), 'expression' : "45.75 mm" }.value, "halfSpace0" : DimensionHalfSpace.RIGHT, "labelRatio" : 0.5571127651893689, "labelDistance" : 0.016588687896728512 * meter });
                    }
                    {
                        skConstraint(sketch, "CHeGIyplm84D.mid1", { "constraintType" : ConstraintType.MIDPOINT, "index" : "3", "name" : "", "localMidpoint" : "CHeGIyplm84D.middle", "localEntity1" : "CHeGIyplm84D.top.start", "localEntity2" : "CHeGIyplm84D.bottom.end" });
                    }
                    {
                        skConstraint(sketch, "CHeGIyplm84D.mid2", { "constraintType" : ConstraintType.MIDPOINT, "index" : "4", "name" : "", "localMidpoint" : "CHeGIyplm84D.middle", "localEntity1" : "CHeGIyplm84D.top.end", "localEntity2" : "CHeGIyplm84D.bottom.start" });
                    }
                    {
                        skConstraint(sketch, "CHeGIyplm84D.perpendicular", { "constraintType" : ConstraintType.PERPENDICULAR, "index" : "2", "name" : "", "localFirst" : "CHeGIyplm84D.top", "localSecond" : "CHeGIyplm84D.left" });
                    }
                    {
                        skConstraint(sketch, "CHeGIyplm84D.parallel.1", { "constraintType" : ConstraintType.PARALLEL, "index" : "3", "name" : "", "localFirst" : "CHeGIyplm84D.bottom", "localSecond" : "CHeGIyplm84D.top" });
                    }
                    {
                        skConstraint(sketch, "CHeGIyplm84D.parallel.2", { "constraintType" : ConstraintType.PARALLEL, "index" : "4", "name" : "", "localFirst" : "CHeGIyplm84D.left", "localSecond" : "CHeGIyplm84D.right" });
                    }
                    {
                        skConstraint(sketch, "CHeGIyplm84D.horizontal", { "constraintType" : ConstraintType.HORIZONTAL, "index" : "2", "name" : "", "localFirst" : "CHeGIyplm84D.top" });
                    }
                    {
                        skConstraint(sketch, "CHeGIyplm84D.corner0", { "constraintType" : ConstraintType.COINCIDENT, "index" : "50", "name" : "", "localFirst" : "CHeGIyplm84D.bottom.start", "localSecond" : "CHeGIyplm84D.left.start" });
                    }
                    {
                        skConstraint(sketch, "CHeGIyplm84D.corner1", { "constraintType" : ConstraintType.COINCIDENT, "index" : "51", "name" : "", "localFirst" : "CHeGIyplm84D.bottom.end", "localSecond" : "CHeGIyplm84D.right.start" });
                    }
                    {
                        skConstraint(sketch, "CHeGIyplm84D.corner2", { "constraintType" : ConstraintType.COINCIDENT, "index" : "52", "name" : "", "localFirst" : "CHeGIyplm84D.top.start", "localSecond" : "CHeGIyplm84D.left.end" });
                    }
                    {
                        skConstraint(sketch, "CHeGIyplm84D.corner3", { "constraintType" : ConstraintType.COINCIDENT, "index" : "53", "name" : "", "localFirst" : "CHeGIyplm84D.top.end", "localSecond" : "CHeGIyplm84D.right.end" });
                    }
                    {
                        skConstraint(sketch, "GhCGiVjmjoIr", { "constraintType" : ConstraintType.DISTANCE, "index" : "9", "name" : "", "localFirst" : "CHeGIyplm84D.left", "localSecond" : "CHeGIyplm84D.right", "direction" : DimensionDirection.MINIMUM, "length" : { 'value' : try(35.5 * millimeter), 'expression' : "35.5 mm" }.value, "halfSpace0" : DimensionHalfSpace.LEFT, "halfSpace1" : DimensionHalfSpace.RIGHT, "labelRatio" : 0.5, "labelDistance" : -0.013063181213384421 * meter });
                    }
                    {
                        skConstraint(sketch, "usijbpHMb2ag", { "constraintType" : ConstraintType.DISTANCE, "index" : "10", "name" : "", "localFirst" : "CHeGIyplm84D.top", "localSecond" : "CHeGIyplm84D.bottom", "direction" : DimensionDirection.MINIMUM, "length" : { 'value' : try(29.5 * millimeter), 'expression' : "29.5 mm" }.value, "halfSpace0" : DimensionHalfSpace.LEFT, "halfSpace1" : DimensionHalfSpace.RIGHT, "labelRatio" : 0.5, "labelDistance" : -0.0121314275882251 * meter });
                    }
                    {
                        var PbYjndppTAWLLc_query;
                        PbYjndppTAWLLc_query=qCompressed(1.0,"%B5$QueryM5Sa$entityTypeBa$EntityTypeS4$EDGESb$historyTypeS8$CREATIONSb$operationIdB2$IdA1S11.6$F7jmyjHoKoPTEcM_0wireOpS9$queryTypeSd$SKETCH_ENTITYSe$sketchEntityIdSc.5$GrnGX0c0h7Llright",id);
                        skConstraint(sketch, "4RYxMtVMnnSd", { "constraintType" : ConstraintType.DISTANCE, "index" : "11", "name" : "", "externalFirst" : qUnion([PbYjndppTAWLLc_query]), "localSecond" : "CHeGIyplm84D.left", "direction" : DimensionDirection.MINIMUM, "length" : { 'value' : try(38.25 * millimeter), 'expression' : "38.25 mm" }.value, "halfSpace0" : DimensionHalfSpace.RIGHT, "halfSpace1" : DimensionHalfSpace.LEFT, "labelRatio" : 0.5415241538924436, "labelDistance" : 0.02361190132796764 * meter });
                    }
                    {
                        var GptkGxIDDhXBSx_query;
                        GptkGxIDDhXBSx_query=qCompressed(1.0,"%B5$QueryM5Sa$entityTypeBa$EntityTypeS4$EDGESb$historyTypeS8$CREATIONSb$operationIdB2$IdA1S11.6$F7jmyjHoKoPTEcM_0wireOpS9$queryTypeSd$SKETCH_ENTITYSe$sketchEntityIdSc.3$GrnGX0c0h7Lltop",id);
                        skConstraint(sketch, "0P5yqmQvce7b", { "constraintType" : ConstraintType.DISTANCE, "index" : "12", "name" : "", "externalFirst" : qUnion([GptkGxIDDhXBSx_query]), "localSecond" : "CHeGIyplm84D.bottom", "direction" : DimensionDirection.MINIMUM, "length" : { 'value' : try(53 * millimeter), 'expression' : "53 mm" }.value, "halfSpace0" : DimensionHalfSpace.LEFT, "halfSpace1" : DimensionHalfSpace.RIGHT, "labelRatio" : 0.6797125759439022, "labelDistance" : -0.011893028393387801 * meter });
                    }
                    skSetInitialGuess(sketch, initialGuessFZIKSpLqpj1T3px_0);
                    skSolve(sketch);
                }
            };
        try(features.FZIKSpLqpj1T3px_0(id));
        features.FClzdadIlMabUsg_0 = function(id)
            {
                annotation { 'unused' : true }
                var features = features;
                if (true)
                {
                    {
                    }
                    var FxQyDdtLQyAZPe_query;
                    FxQyDdtLQyAZPe_query=qCompressed(1.0,"&300$eJytks1ygjAUhV/mdglDUESXgKiMCjbJonbjAIkaq4IxtuXtG9Fx/Ol0XHSTCTmc756TyYvvwOuBy2rsEGQDE/t0k4nFIVWi2HZTlXpobD8qtCo5aQNNJsko6U/1lm+VUILvvZZnB5amZcC4FJ+c9WSxqU/S00/V0eynEF4+SBPCbj/UlqXYq0JWZ3yAQ49GSayFouSynhwx34aIeYggZLag9x4NSTnalStEG+X3zPoSkicl6cDu2KoGMSDDkAaDWRjTiE4Jh/0HV/nyFCBiJDcR2Fn2Ha+VHweybWEHt7CL27gT5HqSwUwXxKaUYqtwTlyIxhMcxbRroFNZ3KzXiwtnOMcMc2KghmajKwXZWkKN7nNO+9GJUXpjvQPUgfXVGBx67mpTrQbFsJjQMB/PrDM6NxvQl9v+m5VbS3e0VkV5Xxgx00AtOA38JYLzVwRso0uJudmENZ+ra9X5D6wDUiyWT3JT7ASufmU9LwhvtR9csOSH",id);
                    var tsQztXLZLIcgQP_query;
                    tsQztXLZLIcgQP_query=qCompressed(1.0,"&30b$eJyNkltvozAQhf/M7CMIEwjlkQChFklIba+0yUsE2Js4Wy5x3Av/vi5pq26r3fbFsn1mvnPG8o+ZDzd3Qg1LnyIXuDyXTSX3d6WWXZuUuozQ0v2ssKEX9ApYsS4WRbYxW9FqqaU4R9PIjR1Dq4ALJe8Fn6uuGW/KS9Hw3DwrIX07UA/SJEtNy0GedaeGF3xM0ojhYmWErhdqdMZ85gLmEaII2VOYb3FO+8WpPyI26R93zoNUouhpCKfnqUYQB5qnLL7epSuG2YYKOP8Ruj5cAmBOa/i52VYnGpBEZZj4ZEoCckXCuDY2FrcDkE2vZKtJTQPAyzXBK5ZY6DIp8cb1rYtUpCacCIMt2+1N5nsu2zT37wqQayrQhCD/S0KeB/tTHuJVuHW+JnzgjPnNM1kC5sGxGY7XXd6tWVovd86rgz2BTLXZL6d2DsHiVnf9x/lRaFvIg4vhpwgJ+l8C4r4aWaiyPbgVv/V71fsHlbjB97E+KLk/fI+LDCUOzIebR3H6t/YEcvfpQA==",id);
                    var twjWHvMmHhrkdC_query;
                    twjWHvMmHhrkdC_query=qCompressed(1.0,"&1d3$eJxlUNtuwjAM/RnvsYgESuGxtGmJoJQl2SR4QaWJIEy9kJZt/fuFMu36Ytk+PufYfpi78HhVpktcjjBI3WTFQR+vWaurMszazEcJ/o+IrlZ8CiLdpKs03tpUla1utWp87ONgaNUOIJXRr0pGpir6TnYf6m7keQbkq+BjIGFMLOWkm7Yy3ad8wIgvaLq2QFUr0ztTOcdApY84QoMJRDu65PXqUp+RGNXv++GbNiqt+Qwut6t6IQl8SUSw2JO1oGLLFTQvqs1P9wWo5Dk8bXeHC/dYaGLKXDZhHpuyWZBbG0cOPNBFbXTZspx7QJMNo2sRovuhbPwj/qbaDR0FkXcuuvOiWlYbQfJkP2Q5k0xZ1+coca+6K484i/+6Im/goDHYWTT6xhjCfSd0EHMDzz4u8gPyG/sAXzCTZg==",id);
                    var nRlpCmrQhycXPO_query;
                    nRlpCmrQhycXPO_query=qCompressed(1.0,"%B5$QueryM5S12$disambiguationDataA1M2S12$disambiguationTypeS8$TOPOLOGYS8$entitiesA1A2C0M5Sb$derivedFromC0M5R4C0M5Sa$entityTypeBa$EntityTypeS4$EDGESb$historyTypeS8$CREATIONSb$operationIdB2$IdA1S11.6$F7jmyjHoKoPTEcM_0wireOpS9$queryTypeSd$SKETCH_ENTITYSe$sketchEntityIdSc$VFM5uiyng2aGR5R6R7R8R9CcA1S-d.7$imprintRcS7$IMPRINTR5R6R7R8R9CcA1S11.-14$FZIKSpLqpj1T3px_0RcR13D1R5C7S4$FACER7R8R9R16RcR13",id);
                    var RiZTESyxwqomWO_query;
                    RiZTESyxwqomWO_query=qCompressed(1.0,"&217$eJyNkMtywiAUhl/mdKkjuRhdxlyUURMLbOzGSQJV2sYgQVvfvhg7Tjt24YaB8/H9h8PTxIfno9DnpU+RA1y2RV3K7bEwstnHhSlCtHTuCTsrQUfA8lW+yKdruxV7I40UbeiFTjSwaSVwoeVJ8FQ3dVcprpfOF3lSQHI7UA+SeJpYZSdb0+jzT3xEkpDhPLOgUUJ3nTGfOIB5iChC/SGkL3hO1eKg3hBz1ddm8Cm1yBUdw+EyVRfEgc4TFs02ScYwW1MB7bsw1e76AMxpZYPIkLeemJ2yeVqXjTFNTXwyJAEZkXFU2XY93g9A1krLvSEVDQAvVwRnLO6h68TE69abRUpSEU4E7SG374Jp1C+GHAuRGz/ievAhXs29TFDxgO2Dltvdv7pVosB+fhpGyV/2DXEOpoA=",id);
                    var UthBdrosqajJkw_query;
                    UthBdrosqajJkw_query=qCompressed(1.0,"%B5$QueryM5S12$disambiguationDataA1M2S12$disambiguationTypeS8$TOPOLOGYS8$entitiesA1A2C0M5Sb$derivedFromC0M5Sa$entityTypeBa$EntityTypeS4$EDGESb$historyTypeS8$CREATIONSb$operationIdB2$IdA1S11.6$FZIKSpLqpj1T3px_0wireOpS9$queryTypeSd$SKETCH_ENTITYSe$sketchEntityIdSc$EkcNhPwMKmQqR5R6R7R8R9CcA1S-d.7$imprintRcS7$IMPRINTD1R5C7S4$FACER7R8R9R12RcR13",id);
                    var BwkFqDWtmxVZHS_query;
                    BwkFqDWtmxVZHS_query=qCompressed(1.0,"&1d3$eJxlUNtygjAQ/ZntI45BEX3kEjRFLk3iTO2LgyStsYMgYJW/b8ROW8eXnd09e87Z3SfXgpeTrLvIYsgEoZqs2KqPU9aq8uBnbeagyHxEeFdJNgWepMkyma91Kg+tapVsHNMxvaFW24KQtfqSIqjLou9kt6HuSnYzwL8FGwP251hTdqppy7r7kfcodjhJYg2Ulax7ZyJcE4hwEENoMIHgjYSsWh6rPeKj6rIZnlUtk4rN4Hi9qhcSwELMvcUGx5zwNZPQfMo2390WIILlkJLXUfS+4u50eaYWnVCbTunMy7WNIQY2qKKq1aGlObOBRCklMffR7VA6/hfvqXpDQ0Jg74tuvyjDMuU4jzZDmlNBpXbtYjJ5LlfhHF8eXJE9MNAY9Cwa/WEUmX3HNxC1PFs/LnA8fI99AyiJkxw=",id);
                    var mkxKSFQTAmcsyr_query;
                    mkxKSFQTAmcsyr_query=qCompressed(1.0,"%B5$QueryM5S12$disambiguationDataA1M2S12$disambiguationTypeS8$TOPOLOGYS8$entitiesA1A2C0M5Sb$derivedFromC0M5R4C0M5Sa$entityTypeBa$EntityTypeS4$EDGESb$historyTypeS8$CREATIONSb$operationIdB2$IdA1S11.6$F7jmyjHoKoPTEcM_0wireOpS9$queryTypeSd$SKETCH_ENTITYSe$sketchEntityIdSc$yNI6JoUKGExwR5R6R7R8R9CcA1S-d.7$imprintRcS7$IMPRINTR5R6R7R8R9CcA1S11.-14$FZIKSpLqpj1T3px_0RcR13D1R5C7S4$FACER7R8R9R16RcR13",id);
                    var CKtDCHwUcKckDn_query;
                    CKtDCHwUcKckDn_query=qCompressed(1.0,"&29e$eJydkk9vwiAYh78MO7aR1v47trUqUVsFPOjFtIVNNrWV4rZ++2FdzBZNXHaAAD+e531JeIocsDhx2c4cAi3ARJPvC/FyypWoDoNc5SGcWbcJbWtOfECzeTbNRiu95AcllOBN6IZW3NO2AjAuxTtnQ1ntu5P8cqk9w1EOkuuG9EEyGCUa2YpGVbL91sc4CSnKUh1UNZddZcQiCyAWQgKh6YLhGk1IPT3Wr5Da9eem9yEkz2oSgOP5VZ2IATJJaDzeJClFdEU4aN64KreXBhAjpQmBVRSf6U5FaSz9Hnawiz3s4yAudSWDmR4Q+1qKg8Il8QCazTFK6QBe3or73XyFcIFLzDAnBrS1Gv5IoKUjaA+Mv6HWLYph/gAtTQMGZgDW7tivsuVctsvFs9jtuApleU/oPOyFaWWhBwf/5WFH23dx7MSe/gPDME5+Z1/2pclQ",id);
                    var xwVKHnBMETSEJM_query;
                    xwVKHnBMETSEJM_query=qCompressed(1.0,"%B5$QueryM5S12$disambiguationDataA1M2S12$disambiguationTypeS8$TOPOLOGYS8$entitiesA1A2C0M5Sb$derivedFromC0M5R4C0M5Sa$entityTypeBa$EntityTypeS4$EDGESb$historyTypeS8$CREATIONSb$operationIdB2$IdA1S11.6$F7jmyjHoKoPTEcM_0wireOpS9$queryTypeSd$SKETCH_ENTITYSe$sketchEntityIdSc$E1K4gf2SurWbR5R6R7R8R9CcA1S-d.7$imprintRcS7$IMPRINTR5R6R7R8R9CcA1S11.-14$FZIKSpLqpj1T3px_0RcR13D1R5C7S4$FACER7R8R9R16RcR13",id);
                    var OPMYwPiBbAitBJ_query;
                    OPMYwPiBbAitBJ_query=qCompressed(1.0,"&1d3$eJxlUE1zgjAQ/TPbI45BED0iBM0gYpPMdPTiIEk1dvgwoC3/vhE7bW0vO7v79r23u08zF54vUneJy5ANQjVZsVeHS9aqqgyzNvNRYv9HeFdLNgGertNlOt+YVJatapVsfNu3g6FR24OQWl2liHRV9J3sPtTdyLMM8HfBHMDhHBvKUTVtpbsv+YBin5N0ZYCqlrp3JmJmAxE+YggNxhBtSczq5bk+IT6qP3bDd6VlWrMpnG9X9UICWIx5sNjhFSd8wyQ0b7LNj/cFiGA5ZOX2ee46Nt8UV+rSMfXohE6D3NhYYuCBKmqtypbmzAOSrClZ8RDdD6XOr/hINRtaEiLvVHSnRRVXa47zZDekORVUGleMYufwarOLftn/dUXewEIOmFk0+sEosvtOaCHqBp55XOQH+BH7BDu/kxg=",id);
                    var CwJFOaCVfsqvUp_query;
                    CwJFOaCVfsqvUp_query=qCompressed(1.0,"%B5$QueryM5S12$disambiguationDataA1M2S12$disambiguationTypeS8$TOPOLOGYS8$entitiesA1A2C0M5Sb$derivedFromC0M5Sa$entityTypeBa$EntityTypeS4$EDGESb$historyTypeS8$CREATIONSb$operationIdB2$IdA1S11.6$FZIKSpLqpj1T3px_0wireOpS9$queryTypeSd$SKETCH_ENTITYSe$sketchEntityIdSc$KOKDdFu301LnR5R6R7R8R9CcA1S-d.7$imprintRcS7$IMPRINTD1R5C7S4$FACER7R8R9R12RcR13",id);
                    var sKzhvGeWmoxJvh_query;
                    sKzhvGeWmoxJvh_query=qCompressed(1.0,"&1d3$eJxlUNtygjAQ/Zntow5BEXlECJpBwCaZ6eiLgySjscNFSC/06xux09b2ZWd3z55zdvdh4cDji2z7xGHIBqG6vDyo40uuVV2Fuc59lNj/Ed43ks2BZ5tsnS23JpWVVlrJzrd9O7CM2gGEbNWrFFFbl0Mnvw31V/IiB/xdsCngcIkN5aQ6Xbf9l3xAsc9JlhqgbmQ7OBOxsIEIHzGExjOIdiRmzfrSnBGfNO976021MmuYB5frVYOQABZjHqz2OOWEb5mE7lnq4nRbgAhWQBy7x0vskdTbWdShM+rSOfWCwtiMxNgFVTatqjQtmAsk2VCS8hDdDqXTX/GeajYcSYjcc9mfV3Vcbzgukr1FCyqoNK5PH7HQO2cS42r21xW54xGagplFkx+MInvohCNEncA1j4v8AN9jn/BIkrI=",id);
                    var oVPJDAQEpSveFc_query;
                    oVPJDAQEpSveFc_query=qCompressed(1.0,"%B5$QueryM5S12$disambiguationDataA1M2S12$disambiguationTypeS8$TOPOLOGYS8$entitiesA1A2C0M5Sb$derivedFromC0M5R4C0M5Sa$entityTypeBa$EntityTypeS4$EDGESb$historyTypeS8$CREATIONSb$operationIdB2$IdA1S11.6$F7jmyjHoKoPTEcM_0wireOpS9$queryTypeSd$SKETCH_ENTITYSe$sketchEntityIdSc$WzKdtZ53KEn6R5R6R7R8R9CcA1S-d.7$imprintRcS7$IMPRINTR5R6R7R8R9CcA1S11.-14$FZIKSpLqpj1T3px_0RcR13D1R5C7S4$FACER7R8R9R16RcR13",id);
                    annotation { "Feature Name" : "Base" }
                    extrude(context, id + "FClzdadIlMabUsg_0", { "domain" : OperationDomain.MODEL, "bodyType" : ExtendedToolBodyType.SOLID, "operationType" : NewBodyOperationType.NEW, "surfaceOperationType" : NewSurfaceOperationType.NEW, "flatOperationType" : FlatOperationType.REMOVE, "entities" : qUnion([FxQyDdtLQyAZPe_query, tsQztXLZLIcgQP_query, twjWHvMmHhrkdC_query, nRlpCmrQhycXPO_query, RiZTESyxwqomWO_query, UthBdrosqajJkw_query, BwkFqDWtmxVZHS_query, mkxKSFQTAmcsyr_query, CKtDCHwUcKckDn_query, xwVKHnBMETSEJM_query, OPMYwPiBbAitBJ_query, CwJFOaCVfsqvUp_query, sKzhvGeWmoxJvh_query, oVPJDAQEpSveFc_query]), "surfaceEntities" : qUnion([]), "wallShape" : qUnion([]), "midplane" : false, "thickness1" : { 'value' : try(5 * millimeter), 'expression' : "5 mm" }.value, "flipWall" : false, "thickness2" : { 'value' : try(0 * millimeter), 'expression' : "0 mm" }.value, "thickness" : { 'value' : try(5 * millimeter), 'expression' : "5 mm" }.value, "endBound" : BoundingType.BLIND, "oppositeDirection" : true, "depth" : { 'value' : try(2.5 * millimeter), 'expression' : "2.5 mm" }.value, "endBoundEntityFace" : qUnion([]), "endBoundEntityBody" : qUnion([]), "endBoundEntityVertex" : qUnion([]), "hasOffset" : false, "offsetDistance" : { 'value' : try(25 * millimeter), 'expression' : "25 mm" }.value, "offsetOppositeDirection" : false, "hasExtrudeDirection" : false, "extrudeDirection" : qUnion([]), "startOffset" : false, "startOffsetBound" : StartOffsetType.BLIND, "startOffsetDistance" : { 'value' : try(25 * millimeter), 'expression' : "25 mm" }.value, "startOffsetOppositeDirection" : false, "startOffsetEntity" : qUnion([]), "symmetric" : false, "hasDraft" : false, "draftAngle" : { 'value' : try(3 * degree), 'expression' : "3 deg" }.value, "draftPullDirection" : false, "hasSecondDirection" : false, "secondDirectionBound" : BoundingType.BLIND, "secondDirectionOppositeDirection" : true, "secondDirectionDepth" : { 'value' : try(25 * millimeter), 'expression' : "25 mm" }.value, "secondDirectionBoundEntityFace" : qUnion([]), "secondDirectionBoundEntityBody" : qUnion([]), "secondDirectionBoundEntityVertex" : qUnion([]), "hasSecondDirectionOffset" : false, "secondDirectionOffsetDistance" : { 'value' : try(25 * millimeter), 'expression' : "25 mm" }.value, "secondDirectionOffsetOppositeDirection" : false, "hasSecondDirectionDraft" : false, "secondDirectionDraftAngle" : { 'value' : try(3 * degree), 'expression' : "3 deg" }.value, "secondDirectionDraftPullDirection" : false, "defaultScope" : false, "booleanScope" : qUnion([]), "defaultSurfaceScope" : true, "booleanSurfaceScope" : qUnion([]) });
                }
            };
        try(features.FClzdadIlMabUsg_0(id));
        features.F20lm00LANSTZ81_1 = function(id)
            {
                annotation { 'unused' : true }
                var features = features;
                if (true)
                {
                    {
                    }
                    var EnqimYigRrXlnv_query;
                    EnqimYigRrXlnv_query=qCompressed(1.0,"&29e$eJydkk9vwiAYh78MO7aR1v47trUqUVsFPOjFtIVNNrWV4rZ++2FdzBZNXHaAAD+e531JeIocsDhx2c4cAi3ARJPvC/FyypWoDoNc5SGcWbcJbWtOfECzeTbNRiu95AcllOBN6IZW3NO2AjAuxTtnQ1ntu5P8cqk9w1EOkuuG9EEyGCUa2YpGVbL91sc4CSnKUh1UNZddZcQiCyAWQgKh6YLhGk1IPT3Wr5Da9eem9yEkz2oSgOP5VZ2IATJJaDzeJClFdEU4aN64KreXBhAjpQmBVRSf6U5FaSz9Hnawiz3s4yAudSWDmR4Q+1qKg8Il8QCazTFK6QBe3or73XyFcIFLzDAnBrS1Gv5IoKUjaA+Mv6HWLYph/gAtTQMGZgDW7tivsuVctsvFs9jtuApleU/oPOyFaWWhBwf/5WFH23dx7MSe/gPDME5+Z1/2pclQ",id);
                    var ymbueMRJEnGyms_query;
                    ymbueMRJEnGyms_query=qCompressed(1.0,"&208$eJx9UUtzgjAQ/jPbYxmCinLkETWjgiYwHb0wgaQYSwUBW+2vb9CZXjp62MPu99jXizeCzVk219WIIQuEavlnpooz71R1DHjHXbSy/iPxtZYMDSCiZEZCd5kGeI3DAIf+ljlQNapQR162ru2b2piDPHaqu/YqjwP+S9gQcDDDLIO9aruquRcn4FPsxiQKNVDVsrm1JMKzgAgXMYQMG6Y7smD18lQfUDyoL6n5rRoZ1br7qV/nZiSALXDsz1McxiTeMgnth+zy/X0AIlhuICgSOzlnh8uWOF9mPy4d0hG16ZhOKKcZzalgr8jSTPQUtR6gufGKRoYDO3s+qaJk3VyTzbsqS9m5Tf7Q0dGqsQ4OTyjoRhjQoW/rS3pRsL2T/Ox+JQemfvkjuCDlimdJW6RmVeNL15yFpJl+C3vD6zjthb9r0aMN",id);
                    annotation { "Feature Name" : "Base Walls up to Board Top" }
                    extrude(context, id + "F20lm00LANSTZ81_1", { "domain" : OperationDomain.MODEL, "bodyType" : ExtendedToolBodyType.SOLID, "operationType" : NewBodyOperationType.ADD, "surfaceOperationType" : NewSurfaceOperationType.NEW, "flatOperationType" : FlatOperationType.REMOVE, "entities" : qUnion([EnqimYigRrXlnv_query]), "surfaceEntities" : qUnion([]), "wallShape" : qUnion([]), "midplane" : false, "thickness1" : { 'value' : try(5 * millimeter), 'expression' : "5 mm" }.value, "flipWall" : false, "thickness2" : { 'value' : try(0 * millimeter), 'expression' : "0 mm" }.value, "thickness" : { 'value' : try(5 * millimeter), 'expression' : "5 mm" }.value, "endBound" : BoundingType.BLIND, "oppositeDirection" : false, "depth" : { 'value' : try(7.6 * millimeter), 'expression' : "7.6 mm" }.value, "endBoundEntityFace" : qUnion([]), "endBoundEntityBody" : qUnion([]), "endBoundEntityVertex" : qUnion([]), "hasOffset" : false, "offsetDistance" : { 'value' : try(25 * millimeter), 'expression' : "25 mm" }.value, "offsetOppositeDirection" : false, "hasExtrudeDirection" : false, "extrudeDirection" : qUnion([]), "startOffset" : false, "startOffsetBound" : StartOffsetType.BLIND, "startOffsetDistance" : { 'value' : try(25 * millimeter), 'expression' : "25 mm" }.value, "startOffsetOppositeDirection" : false, "startOffsetEntity" : qUnion([]), "symmetric" : false, "hasDraft" : false, "draftAngle" : { 'value' : try(3 * degree), 'expression' : "3 deg" }.value, "draftPullDirection" : false, "hasSecondDirection" : false, "secondDirectionBound" : BoundingType.BLIND, "secondDirectionOppositeDirection" : true, "secondDirectionDepth" : { 'value' : try(25 * millimeter), 'expression' : "25 mm" }.value, "secondDirectionBoundEntityFace" : qUnion([]), "secondDirectionBoundEntityBody" : qUnion([]), "secondDirectionBoundEntityVertex" : qUnion([]), "hasSecondDirectionOffset" : false, "secondDirectionOffsetDistance" : { 'value' : try(25 * millimeter), 'expression' : "25 mm" }.value, "secondDirectionOffsetOppositeDirection" : false, "hasSecondDirectionDraft" : false, "secondDirectionDraftAngle" : { 'value' : try(3 * degree), 'expression' : "3 deg" }.value, "secondDirectionDraftPullDirection" : false, "defaultScope" : false, "booleanScope" : qUnion([ymbueMRJEnGyms_query]), "defaultSurfaceScope" : true, "booleanSurfaceScope" : qUnion([]) });
                }
            };
        try(features.F20lm00LANSTZ81_1(id));
        features.FZwxsKNBUyn2dSd_1 = function(id)
            {
                annotation { 'unused' : true }
                var features = features;
                if (true)
                {
                    {
                    }
                    var bHHouYHywAcfQQ_query;
                    bHHouYHywAcfQQ_query=qCompressed(1.0,"&1d3$eJxlUE1zgjAQ/TPbI45BED0iBM0gYpPMdPTiIEk1dvgwoC3/vhE7bW0vO7v79r23u08zF54vUneJy5ANQjVZsVeHS9aqqgyzNvNRYv9HeFdLNgGertNlOt+YVJatapVsfNu3g6FR24OQWl2liHRV9J3sPtTdyLMM8HfBHMDhHBvKUTVtpbsv+YBin5N0ZYCqlrp3JmJmAxE+YggNxhBtSczq5bk+IT6qP3bDd6VlWrMpnG9X9UICWIx5sNjhFSd8wyQ0b7LNj/cFiGA5ZOX2ee46Nt8UV+rSMfXohE6D3NhYYuCBKmqtypbmzAOSrClZ8RDdD6XOr/hINRtaEiLvVHSnRRVXa47zZDekORVUGleMYufwarOLftn/dUXewEIOmFk0+sEosvtOaCHqBp55XOQH+BH7BDu/kxg=",id);
                    var qUBdVWYpoixMCT_query;
                    qUBdVWYpoixMCT_query=qCompressed(1.0,"&1d3$eJxlUNtuwjAM/RnvsYgESuGxtGmJoJQl2SR4QaWJIEy9kJZt/fuFMu36Ytk+PufYfpi78HhVpktcjjBI3WTFQR+vWaurMszazEcJ/o+IrlZ8CiLdpKs03tpUla1utWp87ONgaNUOIJXRr0pGpir6TnYf6m7keQbkq+BjIGFMLOWkm7Yy3ad8wIgvaLq2QFUr0ztTOcdApY84QoMJRDu65PXqUp+RGNXv++GbNiqt+Qwut6t6IQl8SUSw2JO1oGLLFTQvqs1P9wWo5Dk8bXeHC/dYaGLKXDZhHpuyWZBbG0cOPNBFbXTZspx7QJMNo2sRovuhbPwj/qbaDR0FkXcuuvOiWlYbQfJkP2Q5k0xZ1+coca+6K484i/+6Im/goDHYWTT6xhjCfSd0EHMDzz4u8gPyG/sAXzCTZg==",id);
                    var yYrhBFkoRMkXoQ_query;
                    yYrhBFkoRMkXoQ_query=qCompressed(1.0,"&217$eJyNkMtywiAUhl/mdKkjuRhdxlyUURMLbOzGSQJV2sYgQVvfvhg7Tjt24YaB8/H9h8PTxIfno9DnpU+RA1y2RV3K7bEwstnHhSlCtHTuCTsrQUfA8lW+yKdruxV7I40UbeiFTjSwaSVwoeVJ8FQ3dVcprpfOF3lSQHI7UA+SeJpYZSdb0+jzT3xEkpDhPLOgUUJ3nTGfOIB5iChC/SGkL3hO1eKg3hBz1ddm8Cm1yBUdw+EyVRfEgc4TFs02ScYwW1MB7bsw1e76AMxpZYPIkLeemJ2yeVqXjTFNTXwyJAEZkXFU2XY93g9A1krLvSEVDQAvVwRnLO6h68TE69abRUpSEU4E7SG374Jp1C+GHAuRGz/ievAhXs29TFDxgO2Dltvdv7pVosB+fhpGyV/2DXEOpoA=",id);
                    var HTmyhPlnyweCZo_query;
                    HTmyhPlnyweCZo_query=qCompressed(1.0,"%B5$QueryM5S12$disambiguationDataA1M2S12$disambiguationTypeS8$TOPOLOGYS8$entitiesA1A2C0M5Sb$derivedFromC0M5Sa$entityTypeBa$EntityTypeS4$EDGESb$historyTypeS8$CREATIONSb$operationIdB2$IdA1S11.6$FZIKSpLqpj1T3px_0wireOpS9$queryTypeSd$SKETCH_ENTITYSe$sketchEntityIdSc$EkcNhPwMKmQqR5R6R7R8R9CcA1S-d.7$imprintRcS7$IMPRINTD1R5C7S4$FACER7R8R9R12RcR13",id);
                    var UVwZkMcvrCqNlb_query;
                    UVwZkMcvrCqNlb_query=qCompressed(1.0,"%B5$QueryM5S12$disambiguationDataA1M2S12$disambiguationTypeS8$TOPOLOGYS8$entitiesA1A2C0M5Sb$derivedFromC0M5Sa$entityTypeBa$EntityTypeS4$EDGESb$historyTypeS8$CREATIONSb$operationIdB2$IdA1S11.6$FZIKSpLqpj1T3px_0wireOpS9$queryTypeSd$SKETCH_ENTITYSe$sketchEntityIdSc$KOKDdFu301LnR5R6R7R8R9CcA1S-d.7$imprintRcS7$IMPRINTD1R5C7S4$FACER7R8R9R12RcR13",id);
                    var LxnvjDBVdELkjU_query;
                    LxnvjDBVdELkjU_query=qCompressed(1.0,"&1d3$eJxlUNtygjAQ/Zntow5BEXlECJpBwCaZ6eiLgySjscNFSC/06xux09b2ZWd3z55zdvdh4cDji2z7xGHIBqG6vDyo40uuVV2Fuc59lNj/Ed43ks2BZ5tsnS23JpWVVlrJzrd9O7CM2gGEbNWrFFFbl0Mnvw31V/IiB/xdsCngcIkN5aQ6Xbf9l3xAsc9JlhqgbmQ7OBOxsIEIHzGExjOIdiRmzfrSnBGfNO976021MmuYB5frVYOQABZjHqz2OOWEb5mE7lnq4nRbgAhWQBy7x0vskdTbWdShM+rSOfWCwtiMxNgFVTatqjQtmAsk2VCS8hDdDqXTX/GeajYcSYjcc9mfV3Vcbzgukr1FCyqoNK5PH7HQO2cS42r21xW54xGagplFkx+MInvohCNEncA1j4v8AN9jn/BIkrI=",id);
                    var jQDMNueOzRxiix_query;
                    jQDMNueOzRxiix_query=qCompressed(1.0,"%B5$QueryM5S12$disambiguationDataA1M2S12$disambiguationTypeS8$TOPOLOGYS8$entitiesA1A2C0M5Sb$derivedFromC0M5R4C0M5Sa$entityTypeBa$EntityTypeS4$EDGESb$historyTypeS8$CREATIONSb$operationIdB2$IdA1S11.6$F7jmyjHoKoPTEcM_0wireOpS9$queryTypeSd$SKETCH_ENTITYSe$sketchEntityIdSc$WzKdtZ53KEn6R5R6R7R8R9CcA1S-d.7$imprintRcS7$IMPRINTR5R6R7R8R9CcA1S11.-14$FZIKSpLqpj1T3px_0RcR13D1R5C7S4$FACER7R8R9R16RcR13",id);
                    var YdibXJdTbohzkM_query;
                    YdibXJdTbohzkM_query=qCompressed(1.0,"%B5$QueryM5S12$disambiguationDataA1M2S12$disambiguationTypeS8$TOPOLOGYS8$entitiesA1A2C0M5Sb$derivedFromC0M5R4C0M5Sa$entityTypeBa$EntityTypeS4$EDGESb$historyTypeS8$CREATIONSb$operationIdB2$IdA1S11.6$F7jmyjHoKoPTEcM_0wireOpS9$queryTypeSd$SKETCH_ENTITYSe$sketchEntityIdSc$E1K4gf2SurWbR5R6R7R8R9CcA1S-d.7$imprintRcS7$IMPRINTR5R6R7R8R9CcA1S11.-14$FZIKSpLqpj1T3px_0RcR13D1R5C7S4$FACER7R8R9R16RcR13",id);
                    var lpRPAjtxKAubCk_query;
                    lpRPAjtxKAubCk_query=qCompressed(1.0,"%B5$QueryM5S12$disambiguationDataA1M2S12$disambiguationTypeS8$TOPOLOGYS8$entitiesA1A2C0M5Sb$derivedFromC0M5R4C0M5Sa$entityTypeBa$EntityTypeS4$EDGESb$historyTypeS8$CREATIONSb$operationIdB2$IdA1S11.6$F7jmyjHoKoPTEcM_0wireOpS9$queryTypeSd$SKETCH_ENTITYSe$sketchEntityIdSc$VFM5uiyng2aGR5R6R7R8R9CcA1S-d.7$imprintRcS7$IMPRINTR5R6R7R8R9CcA1S11.-14$FZIKSpLqpj1T3px_0RcR13D1R5C7S4$FACER7R8R9R16RcR13",id);
                    var ZnMQgghsjqPPpp_query;
                    ZnMQgghsjqPPpp_query=qCompressed(1.0,"%B5$QueryM5S12$disambiguationDataA1M2S12$disambiguationTypeS8$TOPOLOGYS8$entitiesA1A2C0M5Sb$derivedFromC0M5R4C0M5Sa$entityTypeBa$EntityTypeS4$EDGESb$historyTypeS8$CREATIONSb$operationIdB2$IdA1S11.6$F7jmyjHoKoPTEcM_0wireOpS9$queryTypeSd$SKETCH_ENTITYSe$sketchEntityIdSc$yNI6JoUKGExwR5R6R7R8R9CcA1S-d.7$imprintRcS7$IMPRINTR5R6R7R8R9CcA1S11.-14$FZIKSpLqpj1T3px_0RcR13D1R5C7S4$FACER7R8R9R16RcR13",id);
                    var dbBcATNWGsluui_query;
                    dbBcATNWGsluui_query=qCompressed(1.0,"&1d3$eJxlUNtygjAQ/ZntI45BEX3kEjRFLk3iTO2LgyStsYMgYJW/b8ROW8eXnd09e87Z3SfXgpeTrLvIYsgEoZqs2KqPU9aq8uBnbeagyHxEeFdJNgWepMkyma91Kg+tapVsHNMxvaFW24KQtfqSIqjLou9kt6HuSnYzwL8FGwP251hTdqppy7r7kfcodjhJYg2Ulax7ZyJcE4hwEENoMIHgjYSsWh6rPeKj6rIZnlUtk4rN4Hi9qhcSwELMvcUGx5zwNZPQfMo2390WIILlkJLXUfS+4u50eaYWnVCbTunMy7WNIQY2qKKq1aGlObOBRCklMffR7VA6/hfvqXpDQ0Jg74tuvyjDMuU4jzZDmlNBpXbtYjJ5LlfhHF8eXJE9MNAY9Cwa/WEUmX3HNxC1PFs/LnA8fI99AyiJkxw=",id);
                    var koxvakdUztmvDq_query;
                    koxvakdUztmvDq_query=qCompressed(1.0,"&208$eJx9UUtzgjAQ/jPbYxmCinLkETWjgiYwHb0wgaQYSwUBW+2vb9CZXjp62MPu99jXizeCzVk219WIIQuEavlnpooz71R1DHjHXbSy/iPxtZYMDSCiZEZCd5kGeI3DAIf+ljlQNapQR162ru2b2piDPHaqu/YqjwP+S9gQcDDDLIO9aruquRcn4FPsxiQKNVDVsrm1JMKzgAgXMYQMG6Y7smD18lQfUDyoL6n5rRoZ1br7qV/nZiSALXDsz1McxiTeMgnth+zy/X0AIlhuICgSOzlnh8uWOF9mPy4d0hG16ZhOKKcZzalgr8jSTPQUtR6gufGKRoYDO3s+qaJk3VyTzbsqS9m5Tf7Q0dGqsQ4OTyjoRhjQoW/rS3pRsL2T/Ox+JQemfvkjuCDlimdJW6RmVeNL15yFpJl+C3vD6zjthb9r0aMN",id);
                    annotation { "Feature Name" : "Board Supports" }
                    extrude(context, id + "FZwxsKNBUyn2dSd_1", { "domain" : OperationDomain.MODEL, "bodyType" : ExtendedToolBodyType.SOLID, "operationType" : NewBodyOperationType.ADD, "surfaceOperationType" : NewSurfaceOperationType.NEW, "flatOperationType" : FlatOperationType.REMOVE, "entities" : qUnion([bHHouYHywAcfQQ_query, qUBdVWYpoixMCT_query, yYrhBFkoRMkXoQ_query, HTmyhPlnyweCZo_query, UVwZkMcvrCqNlb_query, LxnvjDBVdELkjU_query, jQDMNueOzRxiix_query, YdibXJdTbohzkM_query, lpRPAjtxKAubCk_query, ZnMQgghsjqPPpp_query, dbBcATNWGsluui_query]), "surfaceEntities" : qUnion([]), "wallShape" : qUnion([]), "midplane" : false, "thickness1" : { 'value' : try(5 * millimeter), 'expression' : "5 mm" }.value, "flipWall" : false, "thickness2" : { 'value' : try(0 * millimeter), 'expression' : "0 mm" }.value, "thickness" : { 'value' : try(5 * millimeter), 'expression' : "5 mm" }.value, "endBound" : BoundingType.BLIND, "oppositeDirection" : false, "depth" : { 'value' : try(6 * millimeter), 'expression' : "6 mm" }.value, "endBoundEntityFace" : qUnion([]), "endBoundEntityBody" : qUnion([]), "endBoundEntityVertex" : qUnion([]), "hasOffset" : false, "offsetDistance" : { 'value' : try(25 * millimeter), 'expression' : "25 mm" }.value, "offsetOppositeDirection" : false, "hasExtrudeDirection" : false, "extrudeDirection" : qUnion([]), "startOffset" : false, "startOffsetBound" : StartOffsetType.BLIND, "startOffsetDistance" : { 'value' : try(25 * millimeter), 'expression' : "25 mm" }.value, "startOffsetOppositeDirection" : false, "startOffsetEntity" : qUnion([]), "symmetric" : false, "hasDraft" : false, "draftAngle" : { 'value' : try(3 * degree), 'expression' : "3 deg" }.value, "draftPullDirection" : false, "hasSecondDirection" : false, "secondDirectionBound" : BoundingType.BLIND, "secondDirectionOppositeDirection" : true, "secondDirectionDepth" : { 'value' : try(25 * millimeter), 'expression' : "25 mm" }.value, "secondDirectionBoundEntityFace" : qUnion([]), "secondDirectionBoundEntityBody" : qUnion([]), "secondDirectionBoundEntityVertex" : qUnion([]), "hasSecondDirectionOffset" : false, "secondDirectionOffsetDistance" : { 'value' : try(25 * millimeter), 'expression' : "25 mm" }.value, "secondDirectionOffsetOppositeDirection" : false, "hasSecondDirectionDraft" : false, "secondDirectionDraftAngle" : { 'value' : try(3 * degree), 'expression' : "3 deg" }.value, "secondDirectionDraftPullDirection" : false, "defaultScope" : false, "booleanScope" : qUnion([koxvakdUztmvDq_query]), "defaultSurfaceScope" : true, "booleanSurfaceScope" : qUnion([]) });
                }
            };
        try(features.FZwxsKNBUyn2dSd_1(id));
        features.F5MxQCEVgUVmmyk_1 = function(id)
            {
                annotation { 'unused' : true }
                var features = features;
                if (true)
                {
                    {
                    }
                    var VlnbUHEvfZSuAD_query;
                    VlnbUHEvfZSuAD_query=qCompressed(1.0,"&211$eJx9UMFygjAQ/ZntUcagIhwRo2YU1AQOemECSTGWCobYar++oDO9dPSwh9339r3d9zYZwfYi9S10GLJBqIZ/Zqq4cKOq05Qb7qPQ/o/Et1oyNIA1JXMS+at0ijc4muIo2DEPKq0KdeJl4ztBPxwxDvJklLl1WxMO+K9hQ8DTOWYZHFRjKv0YuhBQ7MdkHbVAVUt9tyRiYgMRPmIIWQ7M9mTJ6tW5PqJ4UF/T/rfScl237ufunbuQALbEcbBIcRSTeMckNB/S5IfHAUSw3EJQJE5yyY7XHfG++t25dEhH1KFj6lJOM5pTwXrIbpnoJWo/QXOrh0aWB3tn4VbrZKNvyfZdlaU0vs6fKnrt1rgtDi8o6E4Y0GHgtEnO/AB3JDYG1TDDtYmpG2SPwDyYBeWP4IKUIc+Spkj7VY2vRl+EpFkXub9JO4VfPVGl1A==",id);
                    annotation { "Feature Name" : "Base Inner Fillets" }
                    fillet(context, id + "F5MxQCEVgUVmmyk_1", { "filletType" : FilletType.EDGE, "entities" : qUnion([VlnbUHEvfZSuAD_query]), "side1Face" : qUnion([]), "side2Face" : qUnion([]), "centerFaces" : qUnion([]), "tangentPropagation" : true, "blendControlType" : BlendControlType.RADIUS, "crossSection" : FilletCrossSection.CIRCULAR, "radius" : { 'value' : try(2.5 * millimeter), 'expression' : "2.5 mm" }.value, "nonCircularRadius" : { 'value' : try(5 * millimeter), 'expression' : "5 mm" }.value, "width" : { 'value' : try(50 * millimeter), 'expression' : "50 mm" }.value, "rho" : { 'value' : try(0.5), 'expression' : "0.5" }.value, "magnitude" : { 'value' : try(0.5), 'expression' : "0.5" }.value, "defaultsChanged" : false, "isAsymmetric" : false, "otherRadius" : { 'value' : try(5 * millimeter), 'expression' : "5 mm" }.value, "flipAsymmetric" : false, "isPartial" : false, "startPartialType" : EndTypePartialFillet.PERCENTAGE, "startPartialOffset" : { 'value' : try(5 * millimeter), 'expression' : "5 mm" }.value, "startPartialEntity" : qUnion([]), "partialFirstEdgeTotalParameter" : { 'value' : try(0.01), 'expression' : "0.01" }.value, "partialOppositeParameter" : true, "useTrimmedFirstBound" : false, "secondBound" : false, "endPartialType" : EndTypePartialFillet.PERCENTAGE, "endPartialOffset" : { 'value' : try(5 * millimeter), 'expression' : "5 mm" }.value, "endPartialEntity" : qUnion([]), "useTrimmedSecondBound" : false, "partialSecondEdgeTotalParameter" : { 'value' : try(0.99), 'expression' : "0.99" }.value, "isVariable" : false, "vertexSettings" : [], "pointOnEdgeSettings" : [], "smoothTransition" : false, "allowEdgeOverflow" : true, "keepEdges" : qUnion([]), "smoothCorners" : false, "smoothCornerExceptions" : qUnion([]) });
                }
            };
        try(features.F5MxQCEVgUVmmyk_1(id));
        features.FrHsJvjnbaeGYXr_1 = function(id)
            {
                annotation { 'unused' : true }
                var features = features;
                if (true)
                {
                    {
                    }
                    var RXHgxNcFPrnWPH_query;
                    RXHgxNcFPrnWPH_query=qCompressed(1.0,"&211$eJx9UMFygjAQ/ZntUYagohwRo2YU1AQOemECSTGWCobYar++oDO9dPSwh9339r3d9zYZwvYi9S10GXJAqIZ/Zqq4cKOq05Qb7qPQ+Y/Et1oy1Ic1JXMS+at0ijc4muIo2DEPKq0KdeJl47uBHQ4ZB3kyyty6rQkH/NewAeDpHLMMDqoxlX4MxxBQ7MdkHbVAVUt9tyRi4gARPmIIWS7M9mTJ6tW5PqK4X19T+1tpua5b93P3zl1IAFviOFikOIpJvGMSmg9p8sPjACJYbiEoEje5ZMfrjnhfdncuHdAhdemIjimnGc2pYD3ktEz0EnWeoLnVQ0PLg727GFfrZKNvyfZdlaU0vs6fKnrt1qgtDi8o6E7o00HgtknO/AB3JDYC1TDDtZnRcZA9AvNgFpQ/ggtShjxLmiK1qxpfjb4ISbMucn+Tdgq/Onmlxg==",id);
                    annotation { "Feature Name" : "Base Outer Fillet" }
                    fillet(context, id + "FrHsJvjnbaeGYXr_1", { "filletType" : FilletType.EDGE, "entities" : qUnion([RXHgxNcFPrnWPH_query]), "side1Face" : qUnion([]), "side2Face" : qUnion([]), "centerFaces" : qUnion([]), "tangentPropagation" : true, "blendControlType" : BlendControlType.RADIUS, "crossSection" : FilletCrossSection.CIRCULAR, "radius" : { 'value' : try(5 * millimeter), 'expression' : "5 mm" }.value, "nonCircularRadius" : { 'value' : try(5 * millimeter), 'expression' : "5 mm" }.value, "width" : { 'value' : try(50 * millimeter), 'expression' : "50 mm" }.value, "rho" : { 'value' : try(0.5), 'expression' : "0.5" }.value, "magnitude" : { 'value' : try(0.5), 'expression' : "0.5" }.value, "defaultsChanged" : false, "isAsymmetric" : false, "otherRadius" : { 'value' : try(5 * millimeter), 'expression' : "5 mm" }.value, "flipAsymmetric" : false, "isPartial" : false, "startPartialType" : EndTypePartialFillet.PERCENTAGE, "startPartialOffset" : { 'value' : try(5 * millimeter), 'expression' : "5 mm" }.value, "startPartialEntity" : qUnion([]), "partialFirstEdgeTotalParameter" : { 'value' : try(0.01), 'expression' : "0.01" }.value, "partialOppositeParameter" : true, "useTrimmedFirstBound" : false, "secondBound" : false, "endPartialType" : EndTypePartialFillet.PERCENTAGE, "endPartialOffset" : { 'value' : try(5 * millimeter), 'expression' : "5 mm" }.value, "endPartialEntity" : qUnion([]), "useTrimmedSecondBound" : false, "partialSecondEdgeTotalParameter" : { 'value' : try(0.99), 'expression' : "0.99" }.value, "isVariable" : false, "vertexSettings" : [], "pointOnEdgeSettings" : [], "smoothTransition" : false, "allowEdgeOverflow" : true, "keepEdges" : qUnion([]), "smoothCorners" : false, "smoothCornerExceptions" : qUnion([]) });
                }
            };
        try(features.FrHsJvjnbaeGYXr_1(id));
        features.Fcb0Qi0HjD903Wf_1 = function(id)
            {
                annotation { 'unused' : true }
                var features = features;
                if (true)
                {
                    {
                    }
                    var dUXOCspOzMOrXB_query;
                    dUXOCspOzMOrXB_query=qCompressed(1.0,"%B5$QueryM5S12$disambiguationDataA1M2S12$disambiguationTypeS8$TOPOLOGYS8$entitiesA1A2C0M5Sb$derivedFromC0M5R4C0M5Sa$entityTypeBa$EntityTypeS4$EDGESb$historyTypeS8$CREATIONSb$operationIdB2$IdA1S11.6$F7jmyjHoKoPTEcM_0wireOpS9$queryTypeSd$SKETCH_ENTITYSe$sketchEntityIdSc$VFM5uiyng2aGR5R6R7R8R9CcA1S-d.7$imprintRcS7$IMPRINTR5R6R7R8R9CcA1S11.-14$FZIKSpLqpj1T3px_0RcR13D1R5C7S4$FACER7R8R9R16RcR13",id);
                    var BPukWZiwFebspT_query;
                    BPukWZiwFebspT_query=qCompressed(1.0,"%B5$QueryM5S12$disambiguationDataA1M2S12$disambiguationTypeS8$TOPOLOGYS8$entitiesA1A2C0M5Sb$derivedFromC0M5R4C0M5Sa$entityTypeBa$EntityTypeS4$EDGESb$historyTypeS8$CREATIONSb$operationIdB2$IdA1S11.6$F7jmyjHoKoPTEcM_0wireOpS9$queryTypeSd$SKETCH_ENTITYSe$sketchEntityIdSc$yNI6JoUKGExwR5R6R7R8R9CcA1S-d.7$imprintRcS7$IMPRINTR5R6R7R8R9CcA1S11.-14$FZIKSpLqpj1T3px_0RcR13D1R5C7S4$FACER7R8R9R16RcR13",id);
                    var GZebCUhfPiXIFO_query;
                    GZebCUhfPiXIFO_query=qCompressed(1.0,"%B5$QueryM5S12$disambiguationDataA1M2S12$disambiguationTypeS8$TOPOLOGYS8$entitiesA1A2C0M5Sb$derivedFromC0M5R4C0M5Sa$entityTypeBa$EntityTypeS4$EDGESb$historyTypeS8$CREATIONSb$operationIdB2$IdA1S11.6$F7jmyjHoKoPTEcM_0wireOpS9$queryTypeSd$SKETCH_ENTITYSe$sketchEntityIdSc$E1K4gf2SurWbR5R6R7R8R9CcA1S-d.7$imprintRcS7$IMPRINTR5R6R7R8R9CcA1S11.-14$FZIKSpLqpj1T3px_0RcR13D1R5C7S4$FACER7R8R9R16RcR13",id);
                    var OGjYZsQElcMVmv_query;
                    OGjYZsQElcMVmv_query=qCompressed(1.0,"%B5$QueryM5S12$disambiguationDataA1M2S12$disambiguationTypeS8$TOPOLOGYS8$entitiesA1A2C0M5Sb$derivedFromC0M5R4C0M5Sa$entityTypeBa$EntityTypeS4$EDGESb$historyTypeS8$CREATIONSb$operationIdB2$IdA1S11.6$F7jmyjHoKoPTEcM_0wireOpS9$queryTypeSd$SKETCH_ENTITYSe$sketchEntityIdSc$WzKdtZ53KEn6R5R6R7R8R9CcA1S-d.7$imprintRcS7$IMPRINTR5R6R7R8R9CcA1S11.-14$FZIKSpLqpj1T3px_0RcR13D1R5C7S4$FACER7R8R9R16RcR13",id);
                    var HMoZAulwQxaqwo_query;
                    HMoZAulwQxaqwo_query=qCompressed(1.0,"&211$eJx9UMFygjAQ/ZntUYagIBwDBGVU0AQPemECpJoWBUOc6t8XdKaXjh72sPvevrf7PnwbNleh7iuHIQsq2fFTIQ9XrmVzDrnmGK2s/0h2bwVDY0hpPIsTvMxDsiZJSJJgxzxolDzIM6877ATmymYcxFlLfR+2fA7kr2ETIOGMsAKOstONeg5dCCjBWZwmPdC0Qj0s48q3IK4wYggZDkT7eMHa5aX9Qtm4veXmj1QibXv3y/DOQ6gCtiBZMM9JksXZjgnovoUuj88D4oqVBgKrKG5Jrf0kUK45nEsn1KYOnVKXclrQklZshKyeid6i1gu0NEbINjzYO3O3Sbdrdd9uPmVdC41V+VLR67emfXF4Q0EPwphOAqdPMsIBGUhsCrJjmisdUTconoF5EFlmfTLNJU5YtndRjpqW3LS6VoIWQ+R4nQ8Kv9VapCk=",id);
                    var IhVTkUUqhBTuKp_query;
                    IhVTkUUqhBTuKp_query=qCompressed(1.0,"&208$eJx9UUtzgjAQ/jPbYxmCinLkETWjgiYwHb0wgaQYSwUBW+2vb9CZXjp62MPu99jXizeCzVk219WIIQuEavlnpooz71R1DHjHXbSy/iPxtZYMDSCiZEZCd5kGeI3DAIf+ljlQNapQR162ru2b2piDPHaqu/YqjwP+S9gQcDDDLIO9aruquRcn4FPsxiQKNVDVsrm1JMKzgAgXMYQMG6Y7smD18lQfUDyoL6n5rRoZ1br7qV/nZiSALXDsz1McxiTeMgnth+zy/X0AIlhuICgSOzlnh8uWOF9mPy4d0hG16ZhOKKcZzalgr8jSTPQUtR6gufGKRoYDO3s+qaJk3VyTzbsqS9m5Tf7Q0dGqsQ4OTyjoRhjQoW/rS3pRsL2T/Ox+JQemfvkjuCDlimdJW6RmVeNL15yFpJl+C3vD6zjthb9r0aMN",id);
                    annotation { "Feature Name" : "Screw Post Alignment Pins" }
                    extrude(context, id + "Fcb0Qi0HjD903Wf_1", { "domain" : OperationDomain.MODEL, "bodyType" : ExtendedToolBodyType.SOLID, "operationType" : NewBodyOperationType.ADD, "surfaceOperationType" : NewSurfaceOperationType.NEW, "flatOperationType" : FlatOperationType.REMOVE, "entities" : qUnion([dUXOCspOzMOrXB_query, BPukWZiwFebspT_query, GZebCUhfPiXIFO_query, OGjYZsQElcMVmv_query]), "surfaceEntities" : qUnion([]), "wallShape" : qUnion([]), "midplane" : false, "thickness1" : { 'value' : try(5 * millimeter), 'expression' : "5 mm" }.value, "flipWall" : false, "thickness2" : { 'value' : try(0 * millimeter), 'expression' : "0 mm" }.value, "thickness" : { 'value' : try(5 * millimeter), 'expression' : "5 mm" }.value, "endBound" : BoundingType.UP_TO_SURFACE, "oppositeDirection" : false, "depth" : { 'value' : try(25 * millimeter), 'expression' : "25 mm" }.value, "endBoundEntityFace" : qUnion([HMoZAulwQxaqwo_query]), "endBoundEntityBody" : qUnion([]), "endBoundEntityVertex" : qUnion([]), "hasOffset" : false, "offsetDistance" : { 'value' : try(25 * millimeter), 'expression' : "25 mm" }.value, "offsetOppositeDirection" : false, "hasExtrudeDirection" : false, "extrudeDirection" : qUnion([]), "startOffset" : false, "startOffsetBound" : StartOffsetType.BLIND, "startOffsetDistance" : { 'value' : try(25 * millimeter), 'expression' : "25 mm" }.value, "startOffsetOppositeDirection" : false, "startOffsetEntity" : qUnion([]), "symmetric" : false, "hasDraft" : true, "draftAngle" : { 'value' : try(3 * degree), 'expression' : "3 deg" }.value, "draftPullDirection" : true, "hasSecondDirection" : false, "secondDirectionBound" : BoundingType.BLIND, "secondDirectionOppositeDirection" : true, "secondDirectionDepth" : { 'value' : try(25 * millimeter), 'expression' : "25 mm" }.value, "secondDirectionBoundEntityFace" : qUnion([]), "secondDirectionBoundEntityBody" : qUnion([]), "secondDirectionBoundEntityVertex" : qUnion([]), "hasSecondDirectionOffset" : false, "secondDirectionOffsetDistance" : { 'value' : try(25 * millimeter), 'expression' : "25 mm" }.value, "secondDirectionOffsetOppositeDirection" : false, "hasSecondDirectionDraft" : false, "secondDirectionDraftAngle" : { 'value' : try(3 * degree), 'expression' : "3 deg" }.value, "secondDirectionDraftPullDirection" : false, "defaultScope" : false, "booleanScope" : qUnion([IhVTkUUqhBTuKp_query]), "defaultSurfaceScope" : true, "booleanSurfaceScope" : qUnion([]) });
                }
            };
        try(features.Fcb0Qi0HjD903Wf_1(id));
        features.F2lFGyIsnq9Jv7D_1 = function(id)
            {
                annotation { 'unused' : true }
                var features = features;
                if (true)
                {
                    const initialGuessF2lFGyIsnq9Jv7D_1 = { "Iff7RwKm1fQj" : [-0.056, -0.004499999999999999, 1.0, -1.3401508987564629E-18, -0.0012500000000000011, 0.0012500000000000011], "lHK8KUX0tTOv" : [-0.05600000000000001, -0.0245, 1.0, -1.3401508987564629E-18, -0.0012500000000000011, 0.0012500000000000011], "bToH1VyawJ0Q" : [-0.05600000000000001, -0.014499999999999999, 0.12403473458920829, -0.9922778767136677, -0.010077822185373187, 0.01007782218537319], "45jIT4FtTIy7" : [-0.05600000000000001, -0.014499999999999999] };
                    {
                    }
                    var DOWjjFQZXJqcNO_query;
                    DOWjjFQZXJqcNO_query=qCompressed(1.0,"&211$eJx9UMFygjAQ/ZntUYagIBwDBGVU0AQPemECpJoWBUOc6t8XdKaXjh72sPvevrf7PnwbNleh7iuHIQsq2fFTIQ9XrmVzDrnmGK2s/0h2bwVDY0hpPIsTvMxDsiZJSJJgxzxolDzIM6877ATmymYcxFlLfR+2fA7kr2ETIOGMsAKOstONeg5dCCjBWZwmPdC0Qj0s48q3IK4wYggZDkT7eMHa5aX9Qtm4veXmj1QibXv3y/DOQ6gCtiBZMM9JksXZjgnovoUuj88D4oqVBgKrKG5Jrf0kUK45nEsn1KYOnVKXclrQklZshKyeid6i1gu0NEbINjzYO3O3Sbdrdd9uPmVdC41V+VLR67emfXF4Q0EPwphOAqdPMsIBGUhsCrJjmisdUTconoF5EFlmfTLNJU5YtndRjpqW3LS6VoIWQ+R4nQ8Kv9VapCk=",id);
                    annotation { "Feature Name" : "FTDI Cutout" }
                    var sketch = newSketch(context, id + "F2lFGyIsnq9Jv7D_1", { "sketchPlane" : qUnion([DOWjjFQZXJqcNO_query]), "disableImprinting" : false });
                    skLineSegment(sketch, "Iff7RwKm1fQj", { "construction" : false, "index" : "1" });
                    skLineSegment(sketch, "lHK8KUX0tTOv", { "construction" : false, "index" : "2" });
                    skLineSegment(sketch, "bToH1VyawJ0Q", { "construction" : true, "index" : "3" });
                    skPoint(sketch, "45jIT4FtTIy7", { "construction" : false, "index" : "1" });
                    {
                        var KIWaqeVmWjtlIg_query;
                        KIWaqeVmWjtlIg_query=qCompressed(1.0,"%B5$QueryM6S12$disambiguationDataA1M2S12$disambiguationTypeS13$ORIGINAL_DEPENDENCYS9$originalsA1C0M5Sa$entityTypeBa$EntityTypeS4$EDGESb$historyTypeS8$CREATIONSb$operationIdB2$IdA1S11.6$FZIKSpLqpj1T3px_0wireOpS9$queryTypeSd$SKETCH_ENTITYSe$sketchEntityIdSc.1$gU6UubjxYI9v2R4R5R6R7S7$isStartFR8CbA1S11.9$F20lm00LANSTZ81_1opExtrudeRbS8$CAP_EDGE",id);
                        skConstraint(sketch, "Iff7RwKm1fQj.startSnap0", { "constraintType" : ConstraintType.COINCIDENT, "index" : "1", "name" : "", "localFirst" : "Iff7RwKm1fQj.start", "externalSecond" : qUnion([KIWaqeVmWjtlIg_query]) });
                    }
                    {
                        var kplKocJJxDxRON_query;
                        kplKocJJxDxRON_query=qCompressed(1.0,"%B5$QueryM6S12$disambiguationDataA1M2S12$disambiguationTypeS13$ORIGINAL_DEPENDENCYS9$originalsA1C0M5Sa$entityTypeBa$EntityTypeS4$EDGESb$historyTypeS8$CREATIONSb$operationIdB2$IdA1S11.6$FZIKSpLqpj1T3px_0wireOpS9$queryTypeSd$SKETCH_ENTITYSe$sketchEntityIdSc.1$gU6UubjxYI9v2R4R5R6R7S7$isStartFR8CbA1S11.9$F20lm00LANSTZ81_1opExtrudeRbS8$CAP_EDGE",id);
                        skConstraint(sketch, "Iff7RwKm1fQj.endSnap0", { "constraintType" : ConstraintType.PERPENDICULAR, "index" : "1", "name" : "", "localFirst" : "Iff7RwKm1fQj", "externalSecond" : qUnion([kplKocJJxDxRON_query]) });
                    }
                    {
                        var xqcSDoiGBFgLGc_query;
                        xqcSDoiGBFgLGc_query=qCompressed(1.0,"%B5$QueryM6S12$disambiguationDataA1M2S12$disambiguationTypeS13$ORIGINAL_DEPENDENCYS9$originalsA1C0M5Sa$entityTypeBa$EntityTypeS4$EDGESb$historyTypeS8$CREATIONSb$operationIdB2$IdA1S11.6$FZIKSpLqpj1T3px_0wireOpS9$queryTypeSd$SKETCH_ENTITYSe$sketchEntityIdSc.1$2bbxNltBNCr82R4R5R6R7S7$isStartFR8CbA1S11.9$F20lm00LANSTZ81_1opExtrudeRbS8$CAP_EDGE",id);
                        skConstraint(sketch, "Iff7RwKm1fQj.endSnap1", { "constraintType" : ConstraintType.COINCIDENT, "index" : "2", "name" : "", "localFirst" : "Iff7RwKm1fQj.end", "externalSecond" : qUnion([xqcSDoiGBFgLGc_query]) });
                    }
                    {
                        var IXaHSMCqKcaWNN_query;
                        IXaHSMCqKcaWNN_query=qCompressed(1.0,"%B5$QueryM6S12$disambiguationDataA1M2S12$disambiguationTypeS13$ORIGINAL_DEPENDENCYS9$originalsA1C0M5Sa$entityTypeBa$EntityTypeS4$EDGESb$historyTypeS8$CREATIONSb$operationIdB2$IdA1S11.6$FZIKSpLqpj1T3px_0wireOpS9$queryTypeSd$SKETCH_ENTITYSe$sketchEntityIdSc.1$gU6UubjxYI9v2R4R5R6R7S7$isStartFR8CbA1S11.9$F20lm00LANSTZ81_1opExtrudeRbS8$CAP_EDGE",id);
                        skConstraint(sketch, "lHK8KUX0tTOv.startSnap0", { "constraintType" : ConstraintType.COINCIDENT, "index" : "3", "name" : "", "localFirst" : "lHK8KUX0tTOv.start", "externalSecond" : qUnion([IXaHSMCqKcaWNN_query]) });
                    }
                    {
                        var UiLalOGUAXFpqp_query;
                        UiLalOGUAXFpqp_query=qCompressed(1.0,"%B5$QueryM6S12$disambiguationDataA1M2S12$disambiguationTypeS13$ORIGINAL_DEPENDENCYS9$originalsA1C0M5Sa$entityTypeBa$EntityTypeS4$EDGESb$historyTypeS8$CREATIONSb$operationIdB2$IdA1S11.6$FZIKSpLqpj1T3px_0wireOpS9$queryTypeSd$SKETCH_ENTITYSe$sketchEntityIdSc.1$gU6UubjxYI9v2R4R5R6R7S7$isStartFR8CbA1S11.9$F20lm00LANSTZ81_1opExtrudeRbS8$CAP_EDGE",id);
                        skConstraint(sketch, "lHK8KUX0tTOv.endSnap0", { "constraintType" : ConstraintType.PERPENDICULAR, "index" : "2", "name" : "", "localFirst" : "lHK8KUX0tTOv", "externalSecond" : qUnion([UiLalOGUAXFpqp_query]) });
                    }
                    {
                        var DgrryQiAtdujXA_query;
                        DgrryQiAtdujXA_query=qCompressed(1.0,"&211$eJx9UMFygjAQ/ZntUYagIBwDBGVU0AQPemECpJoWBUOc6t8XdKaXjh72sPvevrf7PnwbNleh7iuHIQsq2fFTIQ9XrmVzDrnmGK2s/0h2bwVDY0hpPIsTvMxDsiZJSJJgxzxolDzIM6877ATmymYcxFlLfR+2fA7kr2ETIOGMsAKOstONeg5dCCjBWZwmPdC0Qj0s48q3IK4wYggZDkT7eMHa5aX9Qtm4veXmj1QibXv3y/DOQ6gCtiBZMM9JksXZjgnovoUuj88D4oqVBgKrKG5Jrf0kUK45nEsn1KYOnVKXclrQklZshKyeid6i1gu0NEbINjzYO3O3Sbdrdd9uPmVdC41V+VLR67emfXF4Q0EPwphOAqdPMsIBGUhsCrJjmisdUTconoF5EFlmfTLNJU5YtndRjpqW3LS6VoIWQ+R4nQ8Kv9VapCk=",id);
                        var fuppfzDaziLMrr_query;
                        fuppfzDaziLMrr_query=qCompressed(1.0,"%B5$QueryM6S12$disambiguationDataA1M2S12$disambiguationTypeS13$ORIGINAL_DEPENDENCYS9$originalsA1C0M5Sa$entityTypeBa$EntityTypeS4$EDGESb$historyTypeS8$CREATIONSb$operationIdB2$IdA1S11.6$FZIKSpLqpj1T3px_0wireOpS9$queryTypeSd$SKETCH_ENTITYSe$sketchEntityIdSc.1$2bbxNltBNCr82R4R5R6R7S7$isStartFR8CbA1S11.9$F20lm00LANSTZ81_1opExtrudeRbS8$CAP_EDGE",id);
                        skConstraint(sketch, "lHK8KUX0tTOv.endSnap1", { "constraintType" : ConstraintType.COINCIDENT, "index" : "4", "name" : "", "localFirst" : "lHK8KUX0tTOv.end", "externalSecond" : qUnion([qCoEdge(DgrryQiAtdujXA_query, fuppfzDaziLMrr_query)]) });
                    }
                    {
                        skConstraint(sketch, "W6fcjxne8AON", { "constraintType" : ConstraintType.DISTANCE, "index" : "1", "name" : "", "localFirst" : "Iff7RwKm1fQj", "localSecond" : "lHK8KUX0tTOv", "direction" : DimensionDirection.MINIMUM, "length" : { 'value' : try(20 * millimeter), 'expression' : "20 mm" }.value, "halfSpace0" : DimensionHalfSpace.RIGHT, "halfSpace1" : DimensionHalfSpace.LEFT, "labelRatio" : 0.4235293732955316, "labelDistance" : -0.014009786903858188 * meter });
                    }
                    {
                        skConstraint(sketch, "bToH1VyawJ0Q.startSnap0", { "constraintType" : ConstraintType.COINCIDENT, "index" : "5", "name" : "", "localFirst" : "bToH1VyawJ0Q.start", "localSecond" : "Iff7RwKm1fQj.start" });
                    }
                    {
                        skConstraint(sketch, "bToH1VyawJ0Q.endSnap0", { "constraintType" : ConstraintType.COINCIDENT, "index" : "6", "name" : "", "localFirst" : "bToH1VyawJ0Q.end", "localSecond" : "lHK8KUX0tTOv.end" });
                    }
                    {
                        skConstraint(sketch, "45jIT4FtTIy7.positionSnap0", { "constraintType" : ConstraintType.MIDPOINT, "index" : "1", "name" : "", "localEntity1" : "45jIT4FtTIy7", "localEntity2" : "bToH1VyawJ0Q" });
                    }
                    {
                        var mOpQTucLLDrbvH_query;
                        mOpQTucLLDrbvH_query=qCompressed(1.0,"%B5$QueryM5Sa$entityTypeBa$EntityTypeS4$EDGESb$historyTypeS8$CREATIONSb$operationIdB2$IdA1S11.6$F7jmyjHoKoPTEcM_0wireOpS9$queryTypeSd$SKETCH_ENTITYSe$sketchEntityIdSc.3$GrnGX0c0h7Lltop",id);
                        skConstraint(sketch, "RvJyzyAbbFH3", { "constraintType" : ConstraintType.DISTANCE, "index" : "2", "name" : "", "externalFirst" : qUnion([mOpQTucLLDrbvH_query]), "localSecond" : "45jIT4FtTIy7", "direction" : DimensionDirection.MINIMUM, "length" : { 'value' : try(24 * millimeter), 'expression' : "24 mm" }.value, "halfSpace0" : DimensionHalfSpace.LEFT, "labelRatio" : 0.4912301919140627, "labelDistance" : 0.06620398163795471 * meter });
                    }
                    skSetInitialGuess(sketch, initialGuessF2lFGyIsnq9Jv7D_1);
                    skSolve(sketch);
                }
            };
        try(features.F2lFGyIsnq9Jv7D_1(id));
        features.FvXnCvsVpgy2F0r_1 = function(id)
            {
                annotation { 'unused' : true }
                var features = features;
                if (true)
                {
                    {
                    }
                    var NsLhLGDYbnFcMB_query;
                    NsLhLGDYbnFcMB_query=qCompressed(1.0,"&57d$eJytkttyokAQhl9m9lKLGeTg5QijYVUwPbgVc2MhjMlkUQiMRt8+I4mu5rBVbu0NBfTh7+/v/tGz0O1GVPuxxTFBmayT1UI+bBIli7WfqITiMfkcifel4C6Ko0k0igYz/SrWSiopampT4hm62wJlopJbkfWrYtX8Sd6S9ofiXoLY6YN3EPMHTJc8yloV1f69vQeMxkEU6kBRiqpRDrIeQUFGMce4baM+yfuDfVCvn7s/t44/xy+yElHJu+j5QNU0yhAfsti7mbMwDuIZF6j+LVT6+DZAkPEUBculAy/DFV7ePoEFNjjgQtdLtUwraztIrspKrhWk3EHBeAJBGPv4DRQ6zfNUBAtIIQOhu+Y3Q3c4vTNUHG3PEjDRGdj0W+cdbDAOVoPmMlEEwSAI6WjuswkLfRZ6M01UVPJBrpO8pvhSsplT29ESqH8fDHk5ei6fcGyWu7lxHKaNEVksdmGueqFXucaxWgPJmqukUv0/jbraVyNfGcaIhjy+d/EcFyXbqWqTCe2B3gydzA8r+0wF2Gqo7EsqwDqYfRwc8PJ9vhZuJjyFiKXHAeLoMHFPTQiYlBxNo/oLX6OhFTTZmFp32WTpPfKE4aXMc6FolX4jbHkOt9EvBjG7O+PUy9AXwIAzLz4CHycCrMvA7J7bYiaAk6+8Sv7Fq7TdIh30MLWnm8XTbhZ0t1fa1kmulMOZlnTRvX3jFtF0Uu2nt98Z9hX5hTRg48ss66+3dCj8PzgtIvQdHHDMKxisDwxX7NhqrqiD+tRjl7FXmPST6Q==",id);
                    var zVVKZUzwgSSbih_query;
                    zVVKZUzwgSSbih_query=qCompressed(1.0,"&208$eJx9UUtzgjAQ/jPbYxmCinLkETWjgiYwHb0wgaQYSwUBW+2vb9CZXjp62MPu99jXizeCzVk219WIIQuEavlnpooz71R1DHjHXbSy/iPxtZYMDSCiZEZCd5kGeI3DAIf+ljlQNapQR162ru2b2piDPHaqu/YqjwP+S9gQcDDDLIO9aruquRcn4FPsxiQKNVDVsrm1JMKzgAgXMYQMG6Y7smD18lQfUDyoL6n5rRoZ1br7qV/nZiSALXDsz1McxiTeMgnth+zy/X0AIlhuICgSOzlnh8uWOF9mPy4d0hG16ZhOKKcZzalgr8jSTPQUtR6gufGKRoYDO3s+qaJk3VyTzbsqS9m5Tf7Q0dGqsQ4OTyjoRhjQoW/rS3pRsL2T/Ox+JQemfvkjuCDlimdJW6RmVeNL15yFpJl+C3vD6zjthb9r0aMN",id);
                    annotation { "Feature Name" : "Wall Upward Extend" }
                    extrude(context, id + "FvXnCvsVpgy2F0r_1", { "domain" : OperationDomain.MODEL, "bodyType" : ExtendedToolBodyType.SOLID, "operationType" : NewBodyOperationType.ADD, "surfaceOperationType" : NewSurfaceOperationType.NEW, "flatOperationType" : FlatOperationType.REMOVE, "entities" : qUnion([NsLhLGDYbnFcMB_query]), "surfaceEntities" : qUnion([]), "wallShape" : qUnion([]), "midplane" : false, "thickness1" : { 'value' : try(5 * millimeter), 'expression' : "5 mm" }.value, "flipWall" : false, "thickness2" : { 'value' : try(0 * millimeter), 'expression' : "0 mm" }.value, "thickness" : { 'value' : try(5 * millimeter), 'expression' : "5 mm" }.value, "endBound" : BoundingType.BLIND, "oppositeDirection" : false, "depth" : { 'value' : try(5 * millimeter), 'expression' : "5 mm" }.value, "endBoundEntityFace" : qUnion([]), "endBoundEntityBody" : qUnion([]), "endBoundEntityVertex" : qUnion([]), "hasOffset" : false, "offsetDistance" : { 'value' : try(25 * millimeter), 'expression' : "25 mm" }.value, "offsetOppositeDirection" : false, "hasExtrudeDirection" : false, "extrudeDirection" : qUnion([]), "startOffset" : false, "startOffsetBound" : StartOffsetType.BLIND, "startOffsetDistance" : { 'value' : try(25 * millimeter), 'expression' : "25 mm" }.value, "startOffsetOppositeDirection" : false, "startOffsetEntity" : qUnion([]), "symmetric" : false, "hasDraft" : false, "draftAngle" : { 'value' : try(3 * degree), 'expression' : "3 deg" }.value, "draftPullDirection" : false, "hasSecondDirection" : false, "secondDirectionBound" : BoundingType.BLIND, "secondDirectionOppositeDirection" : true, "secondDirectionDepth" : { 'value' : try(25 * millimeter), 'expression' : "25 mm" }.value, "secondDirectionBoundEntityFace" : qUnion([]), "secondDirectionBoundEntityBody" : qUnion([]), "secondDirectionBoundEntityVertex" : qUnion([]), "hasSecondDirectionOffset" : false, "secondDirectionOffsetDistance" : { 'value' : try(25 * millimeter), 'expression' : "25 mm" }.value, "secondDirectionOffsetOppositeDirection" : false, "hasSecondDirectionDraft" : false, "secondDirectionDraftAngle" : { 'value' : try(3 * degree), 'expression' : "3 deg" }.value, "secondDirectionDraftPullDirection" : false, "defaultScope" : false, "booleanScope" : qUnion([zVVKZUzwgSSbih_query]), "defaultSurfaceScope" : true, "booleanSurfaceScope" : qUnion([]) });
                }
            };
        try(features.FvXnCvsVpgy2F0r_1(id));
        features.FK0B7d8m58GqhOB_1 = function(id)
            {
                annotation { 'unused' : true }
                var features = features;
                if (true)
                {
                    const initialGuessFK0B7d8m58GqhOB_1 = { "zPkda9nprwtZ.bottom" : [-0.004320166073739529, 0.03235, 1.0, 0.0, -0.04117983392626048, 0.05142016607373952], "zPkda9nprwtZ.top" : [-0.00715324281901121, -0.03265000000000001, 1.0, 0.0, -0.038346757180988796, 0.0542532428190112], "zPkda9nprwtZ.left" : [-0.045500000000000006, -0.005166628863662481, 6.123233995736766E-17, -1.0, -0.03751662886366248, 0.02748337113633753], "zPkda9nprwtZ.right" : [0.04709999999999999, -0.0051666288636624804, 6.123233995736766E-17, -1.0, -0.03751662886366248, 0.02748337113633753], "zPkda9nprwtZ.middle" : [7.999999999999952E-4, -1.5000000000000777E-4], "QzEMJX0IJIZ3" : [-0.045500000000000006, 0.03235, 1.0, 0.0, 0.005, -1.0], "Nh1tpK6yKj4z" : [0.04709999999999999, 0.03235, 1.0, 0.0, 0.005, -1.0], "s7wBLGF7xEJH" : [0.04709999999999999, -0.03265000000000001, 1.0, 0.0, 0.005, -1.0], "6Ribghe2meSw" : [-0.045500000000000006, -0.03265000000000001, 1.0, 0.0, 0.005, -1.0] };
                    {
                    }
                    var rVkjbVcmbFysmU_query;
                    rVkjbVcmbFysmU_query=qCompressed(1.0,"%B5$QueryM6S12$disambiguationDataA1M2S12$disambiguationTypeS13$ORIGINAL_DEPENDENCYS9$originalsA1C0M5Sa$entityTypeBa$EntityTypeS4$EDGESb$historyTypeS8$CREATIONSb$operationIdB2$IdA1S11.6$F7jmyjHoKoPTEcM_0wireOpS9$queryTypeSd$SKETCH_ENTITYSe$sketchEntityIdSc$E1K4gf2SurWbR4C6S4$FACER6R7S7$isStartFR8CbA1S11.9$Fcb0Qi0HjD903Wf_1opExtrudeRbS8$CAP_FACE",id);
                    annotation { "Feature Name" : "Attachment Washers" }
                    var sketch = newSketch(context, id + "FK0B7d8m58GqhOB_1", { "sketchPlane" : qUnion([rVkjbVcmbFysmU_query]), "disableImprinting" : false });
                    skLineSegment(sketch, "zPkda9nprwtZ.bottom", { "construction" : true, "index" : "1" });
                    skLineSegment(sketch, "zPkda9nprwtZ.top", { "construction" : true, "index" : "2" });
                    skLineSegment(sketch, "zPkda9nprwtZ.left", { "construction" : true, "index" : "3" });
                    skLineSegment(sketch, "zPkda9nprwtZ.right", { "construction" : true, "index" : "4" });
                    skPoint(sketch, "zPkda9nprwtZ.middle", { "construction" : true, "index" : "1" });
                    skCircle(sketch, "QzEMJX0IJIZ3", { "construction" : false, "index" : "1" });
                    skCircle(sketch, "Nh1tpK6yKj4z", { "construction" : false, "index" : "2" });
                    skCircle(sketch, "s7wBLGF7xEJH", { "construction" : false, "index" : "3" });
                    skCircle(sketch, "6Ribghe2meSw", { "construction" : false, "index" : "4" });
                    {
                        skConstraint(sketch, "zPkda9nprwtZ.mid1", { "constraintType" : ConstraintType.MIDPOINT, "index" : "1", "name" : "", "localMidpoint" : "zPkda9nprwtZ.middle", "localEntity1" : "zPkda9nprwtZ.top.start", "localEntity2" : "zPkda9nprwtZ.bottom.end" });
                    }
                    {
                        skConstraint(sketch, "zPkda9nprwtZ.mid2", { "constraintType" : ConstraintType.MIDPOINT, "index" : "2", "name" : "", "localMidpoint" : "zPkda9nprwtZ.middle", "localEntity1" : "zPkda9nprwtZ.top.end", "localEntity2" : "zPkda9nprwtZ.bottom.start" });
                    }
                    {
                        skConstraint(sketch, "zPkda9nprwtZ.perpendicular", { "constraintType" : ConstraintType.PERPENDICULAR, "index" : "1", "name" : "", "localFirst" : "zPkda9nprwtZ.top", "localSecond" : "zPkda9nprwtZ.left" });
                    }
                    {
                        skConstraint(sketch, "zPkda9nprwtZ.parallel.1", { "constraintType" : ConstraintType.PARALLEL, "index" : "1", "name" : "", "localFirst" : "zPkda9nprwtZ.bottom", "localSecond" : "zPkda9nprwtZ.top" });
                    }
                    {
                        skConstraint(sketch, "zPkda9nprwtZ.parallel.2", { "constraintType" : ConstraintType.PARALLEL, "index" : "2", "name" : "", "localFirst" : "zPkda9nprwtZ.left", "localSecond" : "zPkda9nprwtZ.right" });
                    }
                    {
                        skConstraint(sketch, "zPkda9nprwtZ.horizontal", { "constraintType" : ConstraintType.HORIZONTAL, "index" : "1", "name" : "", "localFirst" : "zPkda9nprwtZ.top" });
                    }
                    {
                        skConstraint(sketch, "zPkda9nprwtZ.corner0", { "constraintType" : ConstraintType.COINCIDENT, "index" : "1", "name" : "", "localFirst" : "zPkda9nprwtZ.bottom.start", "localSecond" : "zPkda9nprwtZ.left.start" });
                    }
                    {
                        skConstraint(sketch, "zPkda9nprwtZ.corner1", { "constraintType" : ConstraintType.COINCIDENT, "index" : "2", "name" : "", "localFirst" : "zPkda9nprwtZ.bottom.end", "localSecond" : "zPkda9nprwtZ.right.start" });
                    }
                    {
                        skConstraint(sketch, "zPkda9nprwtZ.corner2", { "constraintType" : ConstraintType.COINCIDENT, "index" : "3", "name" : "", "localFirst" : "zPkda9nprwtZ.top.start", "localSecond" : "zPkda9nprwtZ.left.end" });
                    }
                    {
                        skConstraint(sketch, "zPkda9nprwtZ.corner3", { "constraintType" : ConstraintType.COINCIDENT, "index" : "4", "name" : "", "localFirst" : "zPkda9nprwtZ.top.end", "localSecond" : "zPkda9nprwtZ.right.end" });
                    }
                    {
                        var YTuTQvbPKpLUFt_query;
                        YTuTQvbPKpLUFt_query=qCompressed(1.0,"%B5$QueryM6S12$disambiguationDataA1M2S12$disambiguationTypeS13$ORIGINAL_DEPENDENCYS9$originalsA1C0M5Sa$entityTypeBa$EntityTypeS4$EDGESb$historyTypeS8$CREATIONSb$operationIdB2$IdA1S11.6$F7jmyjHoKoPTEcM_0wireOpS9$queryTypeSd$SKETCH_ENTITYSe$sketchEntityIdSc$VFM5uiyng2aGR4C6S4$FACER6R7S7$isStartFR8CbA1S11.9$Fcb0Qi0HjD903Wf_1opExtrudeRbS8$CAP_FACE",id);
                        var cBlLsHJqDoYQOb_query;
                        cBlLsHJqDoYQOb_query=qCompressed(1.0,"%B5$QueryM6S12$disambiguationDataA1M2S12$disambiguationTypeS13$ORIGINAL_DEPENDENCYS9$originalsA1C0M5Sa$entityTypeBa$EntityTypeS4$EDGESb$historyTypeS8$CREATIONSb$operationIdB2$IdA1S11.6$F7jmyjHoKoPTEcM_0wireOpS9$queryTypeSd$SKETCH_ENTITYSe$sketchEntityIdSc$VFM5uiyng2aGR4R5R6R7S7$isStartFR8CbA1S11.9$Fcb0Qi0HjD903Wf_1opExtrudeRbS8$CAP_EDGE",id);
                        skConstraint(sketch, "7Z8BfE9mv1HH", { "constraintType" : ConstraintType.CONCENTRIC, "index" : "1", "name" : "", "externalFirst" : qUnion([qCoEdge(YTuTQvbPKpLUFt_query, cBlLsHJqDoYQOb_query)]), "localSecond" : "zPkda9nprwtZ.bottom.start" });
                    }
                    {
                        var KlDPMayeXxhDje_query;
                        KlDPMayeXxhDje_query=qCompressed(1.0,"%B5$QueryM6S12$disambiguationDataA1M2S12$disambiguationTypeS13$ORIGINAL_DEPENDENCYS9$originalsA1C0M5Sa$entityTypeBa$EntityTypeS4$EDGESb$historyTypeS8$CREATIONSb$operationIdB2$IdA1S11.6$FZIKSpLqpj1T3px_0wireOpS9$queryTypeSd$SKETCH_ENTITYSe$sketchEntityIdSc$KK7gqK9IN9Z0R4C6S4$FACER6R7S7$isStartFR8CbA1S11.9$FZwxsKNBUyn2dSd_1opExtrudeRbS8$CAP_FACE",id);
                        var ewGRHCHGiypThz_query;
                        ewGRHCHGiypThz_query=qCompressed(1.0,"%B5$QueryM5Sb$derivedFromA2C0M6S12$disambiguationDataA1M2S12$disambiguationTypeS13$ORIGINAL_DEPENDENCYS9$originalsA1C0M5Sa$entityTypeBa$EntityTypeS4$EDGESb$historyTypeS8$CREATIONSb$operationIdB2$IdA1S11.6$FZIKSpLqpj1T3px_0wireOpS9$queryTypeSd$SKETCH_ENTITYSe$sketchEntityIdSc$KK7gqK9IN9Z0R5C7S4$FACER7R8S7$isStartFR9CcA1S11.9$FZwxsKNBUyn2dSd_1opExtrudeRcS8$CAP_FACEC0M5R1A1M2R2R3R4A1C0M5R5R6R7R8R9CcA1S11.-e$F7jmyjHoKoPTEcM_0RcRdReSc$WzKdtZ53KEn6R5R14R7R8R9CcA1S11.-17$Fcb0Qi0HjD903Wf_1RcSa$SWEPT_FACER5R6R7R8R9CcA1S-1d.7.9$booleanopBooleanRcS9$INTERSECT",id);
                        skConstraint(sketch, "kF5I9zYoPqEC", { "constraintType" : ConstraintType.CONCENTRIC, "index" : "2", "name" : "", "externalFirst" : qUnion([qCoEdge(KlDPMayeXxhDje_query, ewGRHCHGiypThz_query)]), "localSecond" : "zPkda9nprwtZ.top.end" });
                    }
                    {
                        skConstraint(sketch, "QzEMJX0IJIZ3.centerSnap0", { "constraintType" : ConstraintType.COINCIDENT, "index" : "5", "name" : "", "localFirst" : "QzEMJX0IJIZ3.center", "localSecond" : "zPkda9nprwtZ.bottom.start" });
                    }
                    {
                        skConstraint(sketch, "Nh1tpK6yKj4z.centerSnap0", { "constraintType" : ConstraintType.COINCIDENT, "index" : "6", "name" : "", "localFirst" : "Nh1tpK6yKj4z.center", "localSecond" : "zPkda9nprwtZ.bottom.end" });
                    }
                    {
                        skConstraint(sketch, "s7wBLGF7xEJH.centerSnap0", { "constraintType" : ConstraintType.COINCIDENT, "index" : "7", "name" : "", "localFirst" : "s7wBLGF7xEJH.center", "localSecond" : "zPkda9nprwtZ.top.end" });
                    }
                    {
                        skConstraint(sketch, "6Ribghe2meSw.centerSnap0", { "constraintType" : ConstraintType.COINCIDENT, "index" : "8", "name" : "", "localFirst" : "6Ribghe2meSw.center", "localSecond" : "zPkda9nprwtZ.top.start" });
                    }
                    {
                        skConstraint(sketch, "c5Jar9ASgwVr", { "constraintType" : ConstraintType.EQUAL, "index" : "1", "name" : "", "localFirst" : "QzEMJX0IJIZ3", "localSecond" : "Nh1tpK6yKj4z" });
                    }
                    {
                        skConstraint(sketch, "kT9cu4DsXPOh", { "constraintType" : ConstraintType.EQUAL, "index" : "2", "name" : "", "localFirst" : "s7wBLGF7xEJH", "localSecond" : "6Ribghe2meSw" });
                    }
                    {
                        skConstraint(sketch, "7JrK4nH1yKgg", { "constraintType" : ConstraintType.EQUAL, "index" : "3", "name" : "", "localFirst" : "6Ribghe2meSw", "localSecond" : "QzEMJX0IJIZ3" });
                    }
                    {
                        skConstraint(sketch, "5HYRl3mryu6a", { "constraintType" : ConstraintType.DIAMETER, "index" : "1", "name" : "", "localFirst" : "QzEMJX0IJIZ3", "length" : { 'value' : try(10 * millimeter), 'expression' : "10 mm" }.value, "labelRatio" : 3.2603513196110594, "labelAngle" : 0.8102585744526981 * radian });
                    }
                    skSetInitialGuess(sketch, initialGuessFK0B7d8m58GqhOB_1);
                    skSolve(sketch);
                }
            };
        try(features.FK0B7d8m58GqhOB_1(id));
        features.Fa0nm9y3uxa7FRp_1 = function(id)
            {
                annotation { 'unused' : true }
                var features = features;
                if (true)
                {
                    {
                    }
                    var SFrogrsFUeKGpn_query;
                    SFrogrsFUeKGpn_query = qSketchRegion(id + "FK0B7d8m58GqhOB_1", true);
                    var KQXPgJPOnsWePT_query;
                    KQXPgJPOnsWePT_query=qCompressed(1.0,"&208$eJx9UUtzgjAQ/jPbYxmCinLkETWjgiYwHb0wgaQYSwUBW+2vb9CZXjp62MPu99jXizeCzVk219WIIQuEavlnpooz71R1DHjHXbSy/iPxtZYMDSCiZEZCd5kGeI3DAIf+ljlQNapQR162ru2b2piDPHaqu/YqjwP+S9gQcDDDLIO9aruquRcn4FPsxiQKNVDVsrm1JMKzgAgXMYQMG6Y7smD18lQfUDyoL6n5rRoZ1br7qV/nZiSALXDsz1McxiTeMgnth+zy/X0AIlhuICgSOzlnh8uWOF9mPy4d0hG16ZhOKKcZzalgr8jSTPQUtR6gufGKRoYDO3s+qaJk3VyTzbsqS9m5Tf7Q0dGqsQ4OTyjoRhjQoW/rS3pRsL2T/Ox+JQemfvkjuCDlimdJW6RmVeNL15yFpJl+C3vD6zjthb9r0aMN",id);
                    annotation { "Feature Name" : "Attachment Washers" }
                    extrude(context, id + "Fa0nm9y3uxa7FRp_1", { "domain" : OperationDomain.MODEL, "bodyType" : ExtendedToolBodyType.SOLID, "operationType" : NewBodyOperationType.NEW, "surfaceOperationType" : NewSurfaceOperationType.NEW, "flatOperationType" : FlatOperationType.REMOVE, "entities" : qUnion([SFrogrsFUeKGpn_query]), "surfaceEntities" : qUnion([]), "wallShape" : qUnion([]), "midplane" : false, "thickness1" : { 'value' : try(5 * millimeter), 'expression' : "5 mm" }.value, "flipWall" : false, "thickness2" : { 'value' : try(0 * millimeter), 'expression' : "0 mm" }.value, "thickness" : { 'value' : try(5 * millimeter), 'expression' : "5 mm" }.value, "endBound" : BoundingType.BLIND, "oppositeDirection" : false, "depth" : { 'value' : try(5 * millimeter), 'expression' : "5 mm" }.value, "endBoundEntityFace" : qUnion([]), "endBoundEntityBody" : qUnion([]), "endBoundEntityVertex" : qUnion([]), "hasOffset" : false, "offsetDistance" : { 'value' : try(25 * millimeter), 'expression' : "25 mm" }.value, "offsetOppositeDirection" : false, "hasExtrudeDirection" : false, "extrudeDirection" : qUnion([]), "startOffset" : false, "startOffsetBound" : StartOffsetType.BLIND, "startOffsetDistance" : { 'value' : try(25 * millimeter), 'expression' : "25 mm" }.value, "startOffsetOppositeDirection" : false, "startOffsetEntity" : qUnion([]), "symmetric" : false, "hasDraft" : false, "draftAngle" : { 'value' : try(3 * degree), 'expression' : "3 deg" }.value, "draftPullDirection" : false, "hasSecondDirection" : false, "secondDirectionBound" : BoundingType.BLIND, "secondDirectionOppositeDirection" : true, "secondDirectionDepth" : { 'value' : try(25 * millimeter), 'expression' : "25 mm" }.value, "secondDirectionBoundEntityFace" : qUnion([]), "secondDirectionBoundEntityBody" : qUnion([]), "secondDirectionBoundEntityVertex" : qUnion([]), "hasSecondDirectionOffset" : false, "secondDirectionOffsetDistance" : { 'value' : try(25 * millimeter), 'expression' : "25 mm" }.value, "secondDirectionOffsetOppositeDirection" : false, "hasSecondDirectionDraft" : false, "secondDirectionDraftAngle" : { 'value' : try(3 * degree), 'expression' : "3 deg" }.value, "secondDirectionDraftPullDirection" : false, "defaultScope" : false, "booleanScope" : qUnion([KQXPgJPOnsWePT_query]), "defaultSurfaceScope" : true, "booleanSurfaceScope" : qUnion([]) });
                }
            };
        try(features.Fa0nm9y3uxa7FRp_1(id));
        features.FwgeOiAx1uhT9SH_5 = function(id)
            {
                annotation { 'unused' : true }
                var features = features;
                if (true)
                {
                    {
                    }
                    var LDetvDDmPeLXRh_query;
                    LDetvDDmPeLXRh_query=qCompressed(1.0,"%B5$QueryM5Sa$entityTypeBa$EntityTypeS6$VERTEXSb$historyTypeS8$CREATIONSb$operationIdB2$IdA1S11.6$FK0B7d8m58GqhOB_1wireOpS9$queryTypeSd$SKETCH_ENTITYSe$sketchEntityIdSc.6.3$zPkda9nprwtZbottomend",id);
                    var FBNCKXCJUdkDhV_query;
                    FBNCKXCJUdkDhV_query=qCompressed(1.0,"%B5$QueryM5Sa$entityTypeBa$EntityTypeS6$VERTEXSb$historyTypeS8$CREATIONSb$operationIdB2$IdA1S11.6$FK0B7d8m58GqhOB_1wireOpS9$queryTypeSd$SKETCH_ENTITYSe$sketchEntityIdSc.3.3$zPkda9nprwtZtopend",id);
                    var iesbfpiSzITSks_query;
                    iesbfpiSzITSks_query=qCompressed(1.0,"%B5$QueryM5Sa$entityTypeBa$EntityTypeS6$VERTEXSb$historyTypeS8$CREATIONSb$operationIdB2$IdA1S11.6$FK0B7d8m58GqhOB_1wireOpS9$queryTypeSd$SKETCH_ENTITYSe$sketchEntityIdSc.6.5$zPkda9nprwtZbottomstart",id);
                    var YVXxcFNMneIGcE_query;
                    YVXxcFNMneIGcE_query=qCompressed(1.0,"%B5$QueryM5Sa$entityTypeBa$EntityTypeS6$VERTEXSb$historyTypeS8$CREATIONSb$operationIdB2$IdA1S11.6$FK0B7d8m58GqhOB_1wireOpS9$queryTypeSd$SKETCH_ENTITYSe$sketchEntityIdSc.3.5$zPkda9nprwtZtopstart",id);
                    var rUngeRXdvpZHtZ_query;
                    rUngeRXdvpZHtZ_query=qCompressed(1.0,"&208$eJx9UUtzgjAQ/jPbYxmCinLkETWjgiYwHb0wgaQYSwUBW+2vb9CZXjp62MPu99jXizeCzVk219WIIQuEavlnpooz71R1DHjHXbSy/iPxtZYMDSCiZEZCd5kGeI3DAIf+ljlQNapQR162ru2b2piDPHaqu/YqjwP+S9gQcDDDLIO9aruquRcn4FPsxiQKNVDVsrm1JMKzgAgXMYQMG6Y7smD18lQfUDyoL6n5rRoZ1br7qV/nZiSALXDsz1McxiTeMgnth+zy/X0AIlhuICgSOzlnh8uWOF9mPy4d0hG16ZhOKKcZzalgr8jSTPQUtR6gufGKRoYDO3s+qaJk3VyTzbsqS9m5Tf7Q0dGqsQ4OTyjoRhjQoW/rS3pRsL2T/Ox+JQemfvkjuCDlimdJW6RmVeNL15yFpJl+C3vD6zjthb9r0aMN",id);
                    var iEkTiGuYBPbAuA_query;
                    iEkTiGuYBPbAuA_query=qCompressed(1.0,"%B5$QueryM5S12$disambiguationDataA1M2S12$disambiguationTypeS13$ORIGINAL_DEPENDENCYS9$originalsA1C0M5Sa$entityTypeBa$EntityTypeS4$EDGESb$historyTypeS8$CREATIONSb$operationIdB2$IdA1S11.6$FK0B7d8m58GqhOB_1wireOpS9$queryTypeSd$SKETCH_ENTITYSe$sketchEntityIdSc$QzEMJX0IJIZ3R4C6S4$BODYR6R7R8CbA1S11.9$Fa0nm9y3uxa7FRp_1opExtrudeRbSa$SWEPT_BODY",id);
                    var TFbvrcjTALRusW_query;
                    TFbvrcjTALRusW_query=qCompressed(1.0,"%B5$QueryM5S12$disambiguationDataA1M2S12$disambiguationTypeS13$ORIGINAL_DEPENDENCYS9$originalsA1C0M5Sa$entityTypeBa$EntityTypeS4$EDGESb$historyTypeS8$CREATIONSb$operationIdB2$IdA1S11.6$FK0B7d8m58GqhOB_1wireOpS9$queryTypeSd$SKETCH_ENTITYSe$sketchEntityIdSc$Nh1tpK6yKj4zR4C6S4$BODYR6R7R8CbA1S11.9$Fa0nm9y3uxa7FRp_1opExtrudeRbSa$SWEPT_BODY",id);
                    var GPDBQsEKyWLRkC_query;
                    GPDBQsEKyWLRkC_query=qCompressed(1.0,"%B5$QueryM5S12$disambiguationDataA1M2S12$disambiguationTypeS13$ORIGINAL_DEPENDENCYS9$originalsA1C0M5Sa$entityTypeBa$EntityTypeS4$EDGESb$historyTypeS8$CREATIONSb$operationIdB2$IdA1S11.6$FK0B7d8m58GqhOB_1wireOpS9$queryTypeSd$SKETCH_ENTITYSe$sketchEntityIdSc$s7wBLGF7xEJHR4C6S4$BODYR6R7R8CbA1S11.9$Fa0nm9y3uxa7FRp_1opExtrudeRbSa$SWEPT_BODY",id);
                    var nbpQvgadjpFipp_query;
                    nbpQvgadjpFipp_query=qCompressed(1.0,"%B5$QueryM5S12$disambiguationDataA1M2S12$disambiguationTypeS13$ORIGINAL_DEPENDENCYS9$originalsA1C0M5Sa$entityTypeBa$EntityTypeS4$EDGESb$historyTypeS8$CREATIONSb$operationIdB2$IdA1S11.6$FK0B7d8m58GqhOB_1wireOpS9$queryTypeSd$SKETCH_ENTITYSe$sketchEntityIdSc$6Ribghe2meSwR4C6S4$BODYR6R7R8CbA1S11.9$Fa0nm9y3uxa7FRp_1opExtrudeRbSa$SWEPT_BODY",id);
                    var mukTjOOTbXxBCF_query;
                    mukTjOOTbXxBCF_query=qCompressed(1.0,"%B5$QueryM6S12$disambiguationDataA1M2S12$disambiguationTypeS13$ORIGINAL_DEPENDENCYS9$originalsA1C0M5Sa$entityTypeBa$EntityTypeS4$EDGESb$historyTypeS8$CREATIONSb$operationIdB2$IdA1S11.6$FK0B7d8m58GqhOB_1wireOpS9$queryTypeSd$SKETCH_ENTITYSe$sketchEntityIdSc$Nh1tpK6yKj4zR4C6S4$FACER6R7S7$isStartFR8CbA1S11.9$Fa0nm9y3uxa7FRp_1opExtrudeRbS8$CAP_FACE",id);
                    annotation { "Feature Name" : "#featureName" }
                    hole(context, id + "FwgeOiAx1uhT9SH_5", { "isV2" : true, "holeVersion" : HoleVersion.V3, "initEntities" : qUnion([]), "featureName" : "M3x0.50 THRU | ⌴Ø #cBoreDiameterV3 ↧ #cBoreDepthV3", "threadStandard" : ThreadStandard.ISO, "hasClearance" : true, "locationSignatures" : { 'value' : try([{ "direction" : [0.0, 0.0, -1.0], "origin" : [0.04709999999999999 * meter, 0.03235 * meter, 0.0126 * meter] }, { "direction" : [0.0, 0.0, -1.0], "origin" : [0.04709999999999999 * meter, -0.03265000000000001 * meter, 0.0126 * meter] }, { "direction" : [0.0, 0.0, -1.0], "origin" : [-0.045500000000000006 * meter, 0.03235 * meter, 0.0126 * meter] }, { "direction" : [0.0, 0.0, -1.0], "origin" : [-0.045500000000000006 * meter, -0.03265000000000001 * meter, 0.0126 * meter] }]), 'expression' : "[{\"direction\" : [0.0, 0.0, -1.0], \"origin\" : [0.04709999999999999 meter, 0.03235 meter, 0.0126 meter]}, {\"direction\" : [0.0, 0.0, -1.0], \"origin\" : [0.04709999999999999 meter, -0.03265000000000001 meter, 0.0126 meter]}, {\"direction\" : [0.0, 0.0, -1.0], \"origin\" : [-0.045500000000000006 meter, 0.03235 meter, 0.0126 meter]}, {\"direction\" : [0.0, 0.0, -1.0], \"origin\" : [-0.045500000000000006 meter, -0.03265000000000001 meter, 0.0126 meter]}]" }.value, "unitsSystem" : UnitsSystem.METRIC, "styleV2" : HoleStyle.C_BORE, "style" : HoleStyle.C_BORE, "locations" : qUnion([LDetvDDmPeLXRh_query, FBNCKXCJUdkDhV_query, iesbfpiSzITSks_query, YVXxcFNMneIGcE_query]), "scope" : qUnion([rUngeRXdvpZHtZ_query, iEkTiGuYBPbAuA_query, TFbvrcjTALRusW_query, GPDBQsEKyWLRkC_query, nbpQvgadjpFipp_query]), "ansiHoleTableEx" : lookupTablePath({ "fit" : "Loose (ASME)", "size" : "#6", "holeType" : "Clearance" }), "ansiHoleTable" : lookupTablePath({ "fit" : "Free", "size" : "#6", "holeType" : "Clearance" }), "isoHoleTableEx" : lookupTablePath({ "fit" : "Loose", "holeType" : "Tapped", "pitch" : "0.50 mm (Coarse)", "size" : "M3", "type" : "Straight tap" }), "isoHoleTable" : lookupTablePath({ "fit" : "Loose", "holeType" : "Tapped", "pitch" : "0.50 mm (Coarse)", "size" : "M3", "type" : "Straight tap" }), "showThreadClassV2" : false, "ansiThreadClassV2" : lookupTablePath({ "class" : "2B" }), "isoThreadClassV2" : lookupTablePath({ "class" : "4H" }), "showTappedDepth" : true, "holeDiameterV3" : { 'value' : try(3.6 * millimeter), 'expression' : "3.6 mm" }.value, "tapDrillDiameterV3" : { 'value' : try(2.5 * millimeter), 'expression' : "2.5 mm" }.value, "holeDiameterV2" : { 'value' : try(3.6 * millimeter), 'expression' : "3.6 mm" }.value, "holeDiameterV2Precision" : PrecisionType.DEFAULT, "holeDiameterV2ToleranceType" : ToleranceTypeExtended.NONE, "holeDiameterV2ToleranceBoundSymmetrical" : { 'value' : try(0.1 * millimeter), 'expression' : "0.1 mm" }.value, "holeDiameterV2ToleranceBoundDeviationUpper" : { 'value' : try(0.1 * millimeter), 'expression' : "0.1 mm" }.value, "holeDiameterV2ToleranceBoundDeviationLower" : { 'value' : try(-0.1 * millimeter), 'expression' : "-0.1 mm" }.value, "holeDiameterV2ToleranceBoundLimitsUpper" : { 'value' : try(0.1 * millimeter), 'expression' : "0.1 mm" }.value, "holeDiameterV2ToleranceBoundLimitsLower" : { 'value' : try(-0.1 * millimeter), 'expression' : "-0.1 mm" }.value, "holeDiameterV2FitToleranceTable" : lookupTablePath({ "fit" : "User defined", "standard" : "ISO", "shaftClass" : "None", "holeClass" : "A9" }), "holeDiameterV2holeClassToleranceBoundLimitsUpper" : { 'value' : try(0.1 * millimeter), 'expression' : "0.1 mm" }.value, "holeDiameterV2holeClassToleranceBoundLimitsLower" : { 'value' : try(-0.1 * millimeter), 'expression' : "-0.1 mm" }.value, "tapDrillDiameterV2" : { 'value' : try(2.5 * millimeter), 'expression' : "2.5 mm" }.value, "tapDrillDiameterV2Precision" : PrecisionType.DEFAULT, "tapDrillDiameterV2ToleranceType" : ToleranceType.NONE, "tapDrillDiameterV2ToleranceBoundSymmetrical" : { 'value' : try(0.1 * millimeter), 'expression' : "0.1 mm" }.value, "tapDrillDiameterV2ToleranceBoundDeviationUpper" : { 'value' : try(0.1 * millimeter), 'expression' : "0.1 mm" }.value, "tapDrillDiameterV2ToleranceBoundDeviationLower" : { 'value' : try(-0.1 * millimeter), 'expression' : "-0.1 mm" }.value, "tapDrillDiameterV2ToleranceBoundLimitsUpper" : { 'value' : try(0.1 * millimeter), 'expression' : "0.1 mm" }.value, "tapDrillDiameterV2ToleranceBoundLimitsLower" : { 'value' : try(-0.1 * millimeter), 'expression' : "-0.1 mm" }.value, "startStyle" : HoleStartStyle.PLANE, "startBoundEntity" : qUnion([mukTjOOTbXxBCF_query]), "endStyleV2" : HoleEndStyleV2.THROUGH, "endStyle" : HoleEndStyle.THROUGH, "oppositeDirection" : false, "endBoundEntity" : qUnion([]), "offset" : false, "offsetDistance" : { 'value' : try(5 * millimeter), 'expression' : "5 mm" }.value, "oppositeOffsetDirection" : false, "standardTappedOrClearance" : lookupTablePath({ "fit" : "Loose", "standard" : "ISO", "size" : "M6", "type" : "Clearance" }), "standardBlindInLast" : lookupTablePath({ "fit" : "Loose", "standard" : "ISO", "engagement" : "75%", "pitch" : "1.00 mm", "size" : "M6", "type" : "Clearance & tapped" }), "showThreadClass" : false, "ansiThreadClass" : lookupTablePath({ "class" : "2B" }), "isoThreadClass" : lookupTablePath({ "class" : "4H" }), "holeDiameter" : 3.6 * millimeter, "holeDiameterPrecision" : PrecisionType.DEFAULT, "holeDiameterToleranceType" : ToleranceTypeExtended.NONE, "holeDiameterToleranceBoundSymmetrical" : { 'value' : try(0.1 * millimeter), 'expression' : "0.1 mm" }.value, "holeDiameterToleranceBoundDeviationUpper" : { 'value' : try(0.1 * millimeter), 'expression' : "0.1 mm" }.value, "holeDiameterToleranceBoundDeviationLower" : { 'value' : try(-0.1 * millimeter), 'expression' : "-0.1 mm" }.value, "holeDiameterToleranceBoundLimitsUpper" : { 'value' : try(0.1 * millimeter), 'expression' : "0.1 mm" }.value, "holeDiameterToleranceBoundLimitsLower" : { 'value' : try(-0.1 * millimeter), 'expression' : "-0.1 mm" }.value, "holeDiameterFitToleranceTable" : lookupTablePath({ "fit" : "User defined", "standard" : "ISO", "shaftClass" : "None", "holeClass" : "A9" }), "holeDiameterholeClassToleranceBoundLimitsUpper" : { 'value' : try(0.1 * millimeter), 'expression' : "0.1 mm" }.value, "holeDiameterholeClassToleranceBoundLimitsLower" : { 'value' : try(-0.1 * millimeter), 'expression' : "-0.1 mm" }.value, "cBoreDiameterV3" : { 'value' : try(6.5 * millimeter), 'expression' : "6.5 mm" }.value, "cBoreDepthV3" : { 'value' : try(3 * millimeter), 'expression' : "3 mm" }.value, "cBoreDiameter" : 6.5 * millimeter, "cBoreDiameterPrecision" : PrecisionType.DEFAULT, "cBoreDiameterToleranceType" : ToleranceType.NONE, "cBoreDiameterToleranceBoundSymmetrical" : { 'value' : try(0.1 * millimeter), 'expression' : "0.1 mm" }.value, "cBoreDiameterToleranceBoundDeviationUpper" : { 'value' : try(0.1 * millimeter), 'expression' : "0.1 mm" }.value, "cBoreDiameterToleranceBoundDeviationLower" : { 'value' : try(-0.1 * millimeter), 'expression' : "-0.1 mm" }.value, "cBoreDiameterToleranceBoundLimitsUpper" : { 'value' : try(0.1 * millimeter), 'expression' : "0.1 mm" }.value, "cBoreDiameterToleranceBoundLimitsLower" : { 'value' : try(-0.1 * millimeter), 'expression' : "-0.1 mm" }.value, "cBoreDepth" : 3.0 * millimeter, "cBoreDepthPrecision" : PrecisionType.DEFAULT, "cBoreDepthToleranceType" : ToleranceType.NONE, "cBoreDepthToleranceBoundSymmetrical" : { 'value' : try(0.1 * millimeter), 'expression' : "0.1 mm" }.value, "cBoreDepthToleranceBoundDeviationUpper" : { 'value' : try(0.1 * millimeter), 'expression' : "0.1 mm" }.value, "cBoreDepthToleranceBoundDeviationLower" : { 'value' : try(-0.1 * millimeter), 'expression' : "-0.1 mm" }.value, "cBoreDepthToleranceBoundLimitsUpper" : { 'value' : try(0.1 * millimeter), 'expression' : "0.1 mm" }.value, "cBoreDepthToleranceBoundLimitsLower" : { 'value' : try(-0.1 * millimeter), 'expression' : "-0.1 mm" }.value, "cSinkDiameterV3" : { 'value' : try(6.72 * millimeter), 'expression' : "6.72 mm" }.value, "cSinkAngleV3" : { 'value' : try(90 * degree), 'expression' : "90 degree" }.value, "cSinkDiameter" : 6.72 * millimeter, "cSinkDiameterPrecision" : PrecisionType.DEFAULT, "cSinkDiameterToleranceType" : ToleranceType.NONE, "cSinkDiameterToleranceBoundSymmetrical" : { 'value' : try(0.1 * millimeter), 'expression' : "0.1 mm" }.value, "cSinkDiameterToleranceBoundDeviationUpper" : { 'value' : try(0.1 * millimeter), 'expression' : "0.1 mm" }.value, "cSinkDiameterToleranceBoundDeviationLower" : { 'value' : try(-0.1 * millimeter), 'expression' : "-0.1 mm" }.value, "cSinkDiameterToleranceBoundLimitsUpper" : { 'value' : try(0.1 * millimeter), 'expression' : "0.1 mm" }.value, "cSinkDiameterToleranceBoundLimitsLower" : { 'value' : try(-0.1 * millimeter), 'expression' : "-0.1 mm" }.value, "cSinkAngle" : { 'value' : try(90 * degree), 'expression' : "90 deg" }.value, "cSinkAnglePrecision" : PrecisionType.DEFAULT, "cSinkAngleToleranceType" : ToleranceType.NONE, "cSinkAngleToleranceBoundSymmetrical" : { 'value' : try(1 * degree), 'expression' : "1 deg" }.value, "cSinkAngleToleranceBoundDeviationUpper" : { 'value' : try(1 * degree), 'expression' : "1 deg" }.value, "cSinkAngleToleranceBoundDeviationLower" : { 'value' : try(-1 * degree), 'expression' : "-1 deg" }.value, "cSinkAngleToleranceBoundLimitsUpper" : { 'value' : try(1 * degree), 'expression' : "1 deg" }.value, "cSinkAngleToleranceBoundLimitsLower" : { 'value' : try(-1 * degree), 'expression' : "-1 deg" }.value, "tapDrillDiameter" : 2.5 * millimeter, "tapDrillDiameterPrecision" : PrecisionType.DEFAULT, "tapDrillDiameterToleranceType" : ToleranceType.NONE, "tapDrillDiameterToleranceBoundSymmetrical" : { 'value' : try(0.1 * millimeter), 'expression' : "0.1 mm" }.value, "tapDrillDiameterToleranceBoundDeviationUpper" : { 'value' : try(0.1 * millimeter), 'expression' : "0.1 mm" }.value, "tapDrillDiameterToleranceBoundDeviationLower" : { 'value' : try(-0.1 * millimeter), 'expression' : "-0.1 mm" }.value, "tapDrillDiameterToleranceBoundLimitsUpper" : { 'value' : try(0.1 * millimeter), 'expression' : "0.1 mm" }.value, "tapDrillDiameterToleranceBoundLimitsLower" : { 'value' : try(-0.1 * millimeter), 'expression' : "-0.1 mm" }.value, "majorDiameter" : { 'value' : try(3 * millimeter), 'expression' : "3 mm" }.value, "isMultiple" : false, "holeDepthMultiple" : "Multiple", "holeDepthMultiplePrecision" : PrecisionType.DEFAULT, "holeDepthMultipleToleranceType" : ToleranceType.NONE, "holeDepthMultipleToleranceBoundSymmetrical" : { 'value' : try(0.1 * millimeter), 'expression' : "0.1 mm" }.value, "holeDepthMultipleToleranceBoundDeviationUpper" : { 'value' : try(0.1 * millimeter), 'expression' : "0.1 mm" }.value, "holeDepthMultipleToleranceBoundDeviationLower" : { 'value' : try(-0.1 * millimeter), 'expression' : "-0.1 mm" }.value, "holeDepthMultipleToleranceBoundLimitsUpper" : { 'value' : try(0.1 * millimeter), 'expression' : "0.1 mm" }.value, "holeDepthMultipleToleranceBoundLimitsLower" : { 'value' : try(-0.1 * millimeter), 'expression' : "-0.1 mm" }.value, "holeDepthComputedV3" : { 'value' : try(12 * millimeter), 'expression' : "12 mm" }.value, "holeDepthComputed" : { 'value' : try(12 * millimeter), 'expression' : "12 mm" }.value, "holeDepthComputedPrecision" : PrecisionType.DEFAULT, "holeDepthComputedToleranceType" : ToleranceType.NONE, "holeDepthComputedToleranceBoundSymmetrical" : { 'value' : try(0.1 * millimeter), 'expression' : "0.1 mm" }.value, "holeDepthComputedToleranceBoundDeviationUpper" : { 'value' : try(0.1 * millimeter), 'expression' : "0.1 mm" }.value, "holeDepthComputedToleranceBoundDeviationLower" : { 'value' : try(-0.1 * millimeter), 'expression' : "-0.1 mm" }.value, "holeDepthComputedToleranceBoundLimitsUpper" : { 'value' : try(0.1 * millimeter), 'expression' : "0.1 mm" }.value, "holeDepthComputedToleranceBoundLimitsLower" : { 'value' : try(-0.1 * millimeter), 'expression' : "-0.1 mm" }.value, "holeDepthV3" : { 'value' : try(14 * millimeter), 'expression' : "14 mm" }.value, "holeDepth" : { 'value' : try(14 * millimeter), 'expression' : "14 mm" }.value, "holeDepthPrecision" : PrecisionType.DEFAULT, "holeDepthToleranceType" : ToleranceType.NONE, "holeDepthToleranceBoundSymmetrical" : { 'value' : try(0.1 * millimeter), 'expression' : "0.1 mm" }.value, "holeDepthToleranceBoundDeviationUpper" : { 'value' : try(0.1 * millimeter), 'expression' : "0.1 mm" }.value, "holeDepthToleranceBoundDeviationLower" : { 'value' : try(-0.1 * millimeter), 'expression' : "-0.1 mm" }.value, "holeDepthToleranceBoundLimitsUpper" : { 'value' : try(0.1 * millimeter), 'expression' : "0.1 mm" }.value, "holeDepthToleranceBoundLimitsLower" : { 'value' : try(-0.1 * millimeter), 'expression' : "-0.1 mm" }.value, "tipAngleStyle" : TipAngleStyle.DEGREE118, "tipAngleV3" : { 'value' : try(118 * degree), 'expression' : "118 deg" }.value, "tipAngle" : { 'value' : try(118 * degree), 'expression' : "118 deg" }.value, "tipAnglePrecision" : PrecisionType.DEFAULT, "tipAngleToleranceType" : ToleranceType.NONE, "tipAngleToleranceBoundSymmetrical" : { 'value' : try(1 * degree), 'expression' : "1 deg" }.value, "tipAngleToleranceBoundDeviationUpper" : { 'value' : try(1 * degree), 'expression' : "1 deg" }.value, "tipAngleToleranceBoundDeviationLower" : { 'value' : try(-1 * degree), 'expression' : "-1 deg" }.value, "tipAngleToleranceBoundLimitsUpper" : { 'value' : try(1 * degree), 'expression' : "1 deg" }.value, "tipAngleToleranceBoundLimitsLower" : { 'value' : try(-1 * degree), 'expression' : "-1 deg" }.value, "isTappedThrough" : true, "tappedDepthV3" : { 'value' : try(12 * millimeter), 'expression' : "12 mm" }.value, "tappedDepth" : { 'value' : try(12 * millimeter), 'expression' : "12 mm" }.value, "tappedDepthPrecision" : PrecisionType.DEFAULT, "tappedDepthToleranceType" : ToleranceType.NONE, "tappedDepthToleranceBoundSymmetrical" : { 'value' : try(0.1 * millimeter), 'expression' : "0.1 mm" }.value, "tappedDepthToleranceBoundDeviationUpper" : { 'value' : try(0.1 * millimeter), 'expression' : "0.1 mm" }.value, "tappedDepthToleranceBoundDeviationLower" : { 'value' : try(-0.1 * millimeter), 'expression' : "-0.1 mm" }.value, "tappedDepthToleranceBoundLimitsUpper" : { 'value' : try(0.1 * millimeter), 'expression' : "0.1 mm" }.value, "tappedDepthToleranceBoundLimitsLower" : { 'value' : try(-0.1 * millimeter), 'expression' : "-0.1 mm" }.value, "tappedAngle" : { 'value' : try(1.789911 * degree), 'expression' : "1.789911 deg" }.value, "tapClearance" : { 'value' : try(4.0), 'expression' : "4.0" }.value, "toleranceMatching" : { 'value' : try({ "cBoreDepth" : "cBoreDepthV3", "cBoreDiameter" : "cBoreDiameterV3", "cSinkAngle" : "cSinkAngleV3", "cSinkDiameter" : "cSinkDiameterV3", "holeDepth" : "holeDepthV3", "holeDepthComputed" : "holeDepthComputedV3", "holeDiameter" : "holeDiameterV2", "holeDiameterV2" : "holeDiameterV3", "tapDrillDiameter" : "tapDrillDiameterV2", "tapDrillDiameterV2" : "tapDrillDiameterV3", "tappedDepth" : "tappedDepthV3", "tipAngle" : "tipAngleV3" }), 'expression' : "{\"cBoreDepth\" : \"cBoreDepthV3\", \"cBoreDiameter\" : \"cBoreDiameterV3\", \"cSinkAngle\" : \"cSinkAngleV3\", \"cSinkDiameter\" : \"cSinkDiameterV3\", \"holeDepth\" : \"holeDepthV3\", \"holeDepthComputed\" : \"holeDepthComputedV3\", \"holeDiameter\" : \"holeDiameterV2\", \"holeDiameterV2\" : \"holeDiameterV3\", \"tapDrillDiameter\" : \"tapDrillDiameterV2\", \"tapDrillDiameterV2\" : \"tapDrillDiameterV3\", \"tappedDepth\" : \"tappedDepthV3\", \"tipAngle\" : \"tipAngleV3\"}" }.value });
                }
            };
        try(features.FwgeOiAx1uhT9SH_5(id));
        features.FVNrFRgObckCnDs_5 = function(id)
            {
                annotation { 'unused' : true }
                var features = features;
                if (true)
                {
                    {
                    }
                    var UwEWXpFvekLkQJ_query;
                    UwEWXpFvekLkQJ_query=qCompressed(1.0,"%B5$QueryM5S12$disambiguationDataA1M2S12$disambiguationTypeS13$ORIGINAL_DEPENDENCYS9$originalsA1C0M5Sa$entityTypeBa$EntityTypeS4$EDGESb$historyTypeS8$CREATIONSb$operationIdB2$IdA1S11.6$FK0B7d8m58GqhOB_1wireOpS9$queryTypeSd$SKETCH_ENTITYSe$sketchEntityIdSc$QzEMJX0IJIZ3R4C6S4$BODYR6R7R8CbA1S11.9$Fa0nm9y3uxa7FRp_1opExtrudeRbSa$SWEPT_BODY",id);
                    var pbCJHWCOnBTTbz_query;
                    pbCJHWCOnBTTbz_query=qCompressed(1.0,"%B5$QueryM5S12$disambiguationDataA1M2S12$disambiguationTypeS13$ORIGINAL_DEPENDENCYS9$originalsA1C0M5Sa$entityTypeBa$EntityTypeS4$EDGESb$historyTypeS8$CREATIONSb$operationIdB2$IdA1S11.6$FK0B7d8m58GqhOB_1wireOpS9$queryTypeSd$SKETCH_ENTITYSe$sketchEntityIdSc$Nh1tpK6yKj4zR4C6S4$BODYR6R7R8CbA1S11.9$Fa0nm9y3uxa7FRp_1opExtrudeRbSa$SWEPT_BODY",id);
                    var yzVrbrbveIGZeO_query;
                    yzVrbrbveIGZeO_query=qCompressed(1.0,"%B5$QueryM5S12$disambiguationDataA1M2S12$disambiguationTypeS13$ORIGINAL_DEPENDENCYS9$originalsA1C0M5Sa$entityTypeBa$EntityTypeS4$EDGESb$historyTypeS8$CREATIONSb$operationIdB2$IdA1S11.6$FK0B7d8m58GqhOB_1wireOpS9$queryTypeSd$SKETCH_ENTITYSe$sketchEntityIdSc$s7wBLGF7xEJHR4C6S4$BODYR6R7R8CbA1S11.9$Fa0nm9y3uxa7FRp_1opExtrudeRbSa$SWEPT_BODY",id);
                    var ETcqYgetTNpFUr_query;
                    ETcqYgetTNpFUr_query=qCompressed(1.0,"%B5$QueryM5S12$disambiguationDataA1M2S12$disambiguationTypeS13$ORIGINAL_DEPENDENCYS9$originalsA1C0M5Sa$entityTypeBa$EntityTypeS4$EDGESb$historyTypeS8$CREATIONSb$operationIdB2$IdA1S11.6$FK0B7d8m58GqhOB_1wireOpS9$queryTypeSd$SKETCH_ENTITYSe$sketchEntityIdSc$6Ribghe2meSwR4C6S4$BODYR6R7R8CbA1S11.9$Fa0nm9y3uxa7FRp_1opExtrudeRbSa$SWEPT_BODY",id);
                    annotation { "Feature Name" : "Washers" }
                    compositePart(context, id + "FVNrFRgObckCnDs_5", { "bodies" : qUnion([UwEWXpFvekLkQJ_query, pbCJHWCOnBTTbz_query, yzVrbrbveIGZeO_query, ETcqYgetTNpFUr_query]), "closed" : true });
                }
            };
        try(features.FVNrFRgObckCnDs_5(id));
        return context;
    }, millimeter, {});

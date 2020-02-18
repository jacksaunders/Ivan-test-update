export const Palette = {
    WHITE: '#fff',
    WHITE85: '#D9D9D9',
    WHITE90: '#E6E6E6',
    BLACK0: '#000',
    CACTUS: '#00B67A',
    DENIM20: '#102F56',
    DENIM40: '#4D809E',
    DENIM65: '#699FE3',
    DENIM80: '#86B7EB', // random name
    CORAL65: '#FB534A',
    LONDON45: '#4D809E',
    LONDON95: '#EEF3F7',
};

export const mapPalleteToColor = {
    [Palette.WHITE]: Palette.WHITE,
    [Palette.WHITE90]: Palette.WHITE90,
    [Palette.BLACK0]: Palette.BLACK0,
    [Palette.CACTUS]: Palette.CACTUS,
    [Palette.DENIM20]: Palette.DENIM20,
    [Palette.DENIM40]: Palette.DENIM40,
    [Palette.DENIM65]: Palette.DENIM65,
    [Palette.DENIM80]: Palette.DENIM80,
    [Palette.CORAL65]: Palette.CORAL65,
    [Palette.LONDON45]: Palette.LONDON45,
    [Palette.LONDON95]: Palette.LONDON95,
};

export const setColor = color => (color ? mapPalleteToColor[color] : false);
export const setBgColor = color => (color ? mapPalleteToColor[color] : false);

export const Colors = {
    BACKGROUND: {
        BUTTON: {
            PRIMARY: Palette.CORAL65,
        },
        SECTION: {
            SECONDARY: Palette.LONDON95,
        },
        DIVIDER: {
            PRIMARY: Palette.DENIM65,
            SECONDARY: Palette.WHITE90,
        },
        TIMELNE_ITEM_LINE: {
            PRIMARY: Palette.WHITE85,
        },
    },
    ICON: {
        PRIMARY: Palette.DENIM40,
    },
    TYPOGRAPHY: {
        BUTTON: {
            PRIMARY: Palette.WHITE,
        },
        H1: {
            PRIMARY: Palette.DENIM20,
        },
        H2: {
            PRIMARY: Palette.BLACK0,
            SECONDARY: Palette.DENIM65,
        },
        TEXT: {
            PRIMARY: Palette.BLACK0,
        },
    },
};

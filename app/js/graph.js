/**
 * �O���t��S������N���X
 */
class Graph extends Chart {
    /**
     * �R���X�g���N�^
     *
     * �O���t�𐶐����āA�^�C�}�[��N������
     */
    constructor(id, time) {
        var now = new Date();
        now = now.toLocaleTimeString();
        now = now.slice(0, 5);

        var config = {
            //�O���t�̎��
            type: 'line',
            //�f�[�^�̐ݒ�
            data: {
                //�f�[�^���ڂ̃��x��
                labels: [now],
                //�f�[�^�Z�b�g
                datasets: [
                    {
                        //�}��
                        label: "+1",
                        //�ʂ̕\��
                        fill: false,
                        //���̃J�[�u
                        lineTension: 0,
                        //�w�i�F
                        backgroundColor: "rgba(179,181,198,0.2)",
                        //�g���̐F
                        borderColor: "#ff6384",
                        //�����_�̘g���̐F
                        pointBorderColor: "rgba(179,181,198,1)",
                        //�����_�̔w�i�F
                        pointBackgroundColor: "#fff",
                        //�����_�̃T�C�Y
                        pointRadius: 5,
                        //�����_�̃T�C�Y�i�z�o�[�����Ƃ��j
                        pointHoverRadius: 8,
                        //�����_�̔w�i�F�i�z�o�[�����Ƃ��j
                        pointHoverBackgroundColor: "rgba(179,181,198,1)",
                        //�����_�̘g���̐F�i�z�o�[�����Ƃ��j
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        //�����_���O�Ń}�E�X�z�o�[��F������͈́i�s�N�Z���P�ʁj
                        pointHitRadius: 15,
                        //�O���t�̃f�[�^
                        data: [0]
                    },
                    {
                        //�}��
                        label: "-1",
                        //�ʂ̕\��
                        fill: false,
                        //���̃J�[�u
                        lineTension: 0,
                        //�w�i�F
                        backgroundColor: "rgba(75,192,192,0.4)",
                        //�g���̐F
                        borderColor: "#36a2eb",
                        //�����_�̘g���̐F
                        pointBorderColor: "rgba(75,192,192,1)",
                        //�����_�̔w�i�F
                        pointBackgroundColor: "#fff",
                        //�����_�̃T�C�Y
                        pointRadius: 5,
                        //�����_�̃T�C�Y�i�z�o�[�����Ƃ��j
                        pointHoverRadius: 8,
                        //�����_�̔w�i�F�i�z�o�[�����Ƃ��j
                        pointHoverBackgroundColor: "rgba(75,192,192,1)",
                        //�����_�̘g���̐F�i�z�o�[�����Ƃ��j
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        //�����_���O�Ń}�E�X�z�o�[��F������͈́i�s�N�Z���P�ʁj
                        pointHitRadius: 10,
                        //�O���t�̃f�[�^
                        data: []
                    }
                ]
            },
            //�I�v�V�����̐ݒ�
            options: {
                //���̐ݒ�
                scales: {
                    //�c���̐ݒ�
                    yAxes: [{
                        //�ڐ���̐ݒ�
                        ticks: {
                            //�ŏ��l��0�ɂ���
                            beginAtZero: true
                        }
                    }]
                },
                //�z�o�[�̐ݒ�
                hover: {
                    //�z�o�[���̓���isingle, label, dataset�j
                    mode: 'single'
                }
            }
        }

        // canvas��ǂݍ���
        var canvas = document.getElementById(id);
        super(canvas.getContext('2d'), config);

        // �^�C�}�[��J�n
        this.time = time;
        this.timer()
    }


    /**
     * ���݂�\���O���t�̒l��1���Z����
     */
    add(lineId) {
        // ��ԐV�����v�f��1����Z����
        var index = graph.data.datasets[lineId].data.length - 1;
        this.data.datasets[lineId].data[index]++;
        this.update();
    }


    /**
     * �O���t�̃��x���Ɍ��ݎ����𑫂�
     */
    chop() {
        // ���x���𑫂�
        var time = new Date();
        time = time.toLocaleTimeString();
        time = time.slice(0, 5);
        this.data.labels.push(time);

        // �[�����߂��
        var lineId = 0;
        var index = this.data.labels.length - 1;
        if (this.data.datasets[lineId].data[index] == undefined) {
            this.data.datasets[lineId].data[index] = 0;
        }
        lineId = 1;
        index = this.data.labels.length - 1;
        if (this.data.datasets[lineId].data[index] == undefined) {
            this.data.datasets[lineId].data[index] = 0;
        }

        // ��ʂ̍X�V
        this.update();
    }


    /**
     * ����I�ɁAchop����s����
     */
    timer() {
        // �l��v�Z����
        this.chop();

        var self = this;
        setInterval(
            () => {
                self.chop();
            }, self.time * 1000);
    }
}

var graph = new Graph("graph", 10);

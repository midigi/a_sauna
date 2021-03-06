"""empty message

Revision ID: 6382cf37cdfb
Revises: 9fcb606e27dd
Create Date: 2021-03-30 10:42:40.347410

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '6382cf37cdfb'
down_revision = '9fcb606e27dd'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('projects', sa.Column('color', sa.String(length=100), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('projects', 'color')
    # ### end Alembic commands ###
